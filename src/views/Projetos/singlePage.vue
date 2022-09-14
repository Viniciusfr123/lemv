<template>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-4/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{state.projeto.titulo}}</h1>
            <p class="leading-relaxed mb-4">{{state.projeto.texto}}</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Autor</span>
                <span class="ml-auto text-gray-900">{{state.projeto.nomeAutor}}</span>
              </div>
          </div>
          <div class="lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded">
            <img alt="Imagem Projeto" :src="state.img">
            <skill-resume v-if="state.projeto.skill" :skill="state.projeto.skill"/>
          </div>
      </div>
      <div class="lg:w-4/5 mx-auto flex flex-wrap py-10">
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Tutorial</h1>
        <carousel :manual="state.projeto.manual"/>
      </div>
  </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router'
import services from '../../services'
import { reactive } from 'vue'
import carousel from '../../components/carousel/index.vue'
import skillResume from '../../components/Card/skillResume.vue'
export default {
  components: { carousel, skillResume },

  setup () {
    const img = '/img/principal.aa4e4091.png'
    const route = useRoute()
    const projeto = {}
    const id = route.params.id
    const state = reactive({
      img,
      projeto
    })

    async function getSingleProject () {
      const { data, errors } = await services.proj.getSingle(this.id)
      if (!errors) {
        state.projeto = data.data
        if (state.projeto.media != null) {
          downloadImg(state.projeto.media.fileId)
        } else {
          console.log(`Não tem media ${state.img}`)
        }
      } else {
        console.log(errors)
      }
    }

    async function downloadImg (fileId) {
      if (fileId) {
        const { data, errors } = await services.file.download(fileId)
        if (!errors) {
          var fileURL = window.URL.createObjectURL(new Blob([data]))
          state.img = fileURL
        } else {
          console.log('result')
          console.log(errors)
        }
      }
    }

    return {
      id,
      state,
      getSingleProject,
      downloadImg
    }
  },

  mounted () {
    this.getSingleProject()
  }

}
</script>
