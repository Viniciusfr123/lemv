<template>
<section class="text-gray-600 body-font overflow-hidden">
   <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
         <div class="lg:w-4/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{state.artefact.name || 'Api ta com problema no nome do artefato'}}</h1>
            <p class="leading-relaxed mb-4">{{state.artefact.description}}</p>
         </div>
         <div class="lg:w-2/6 w-full h-auto object-cover object-center rounded">
            <div class="h-90">
              <imagens :imgs="state.imgs"/>
            </div>
            <skill-resume v-if="state.artefact.skill" :skill="state.artefact.skill"/>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import skillResume from '../../components/Card/skillResume.vue'

import services from '../../services'
import Imagens from '../../components/carousel/imagens.vue'

export default {
  components: { skillResume, Imagens },

  setup () {
    const route = useRoute()
    const id = route.params.id
    const artefact = {}
    const imgs = ['/img/principal.aa4e4091.png']
    const state = reactive({
      imgs,
      artefact
    })

    async function getSingleArt () {
      const { data, errors } = await services.art.getSingle(this.id)
      if (!errors) {
        state.artefact = data.data
        if (state.artefact.medias != null) {
          state.artefact.medias.forEach(media => {
            downloadImg(media.fileId)
          })
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
          state.imgs.push(fileURL)
        } else {
          console.log('result')
          console.log(errors)
        }
      }
      if (state.imgs.lenght > 2) {
        state.imgs = state.imgs.filter(a => a === '/img/principal.aa4e4091.png')
      }
    }

    return {
      id,
      state,
      getSingleArt,
      downloadImg
    }
  },

  mounted () {
    this.getSingleArt()
  }
}

</script>
