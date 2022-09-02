<template>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-4/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{state.noticia.title}}</h1>
            <p class="leading-relaxed mb-4">{{state.noticia.text}}</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Autor</span>
                <span class="ml-auto text-gray-900">{{state.noticia.authorName}}</span>
              </div>
          </div>
        <img alt="Imagem singlePage Noticia" class="lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded" :src="state.img">
      </div>
  </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

import services from '../../services'

export default {
  components: {},

  setup () {
    const route = useRoute()
    const id = route.params.id
    const noticia = {}
    const img = '/img/principal.aa4e4091.png'
    const state = reactive({
      img,
      noticia
    })

    async function getSingleNew () {
      const { data, errors } = await services.news.getSingle(this.id)
      if (!errors) {
        state.noticia = data.data
        if (state.noticia.media != null) {
          downloadImg(state.noticia.media.fileId)
          console.log(state.img)
        } else {
          console.log(`Não tem media ${state.img}`)
        }
        console.log(data)
      } else {
        console.log(errors)
      }
    }

    async function downloadImg (fileId) {
      console.log(fileId)
      if (fileId) {
        const { data, errors } = await services.file.download(fileId)
        if (!errors) {
          var fileURL = window.URL.createObjectURL(new Blob([data]))
          state.img = fileURL
          print(this.img)
        } else {
          console.log('result')
          console.log(errors)
        }
      }
    }

    return {
      id,
      state,
      getSingleNew,
      downloadImg
    }
  },

  mounted () {
    this.getSingleNew()
  }
}

</script>
