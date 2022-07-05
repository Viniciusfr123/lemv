<template>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-4/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{noticia.title}}</h1>
            <p class="leading-relaxed mb-4">{{noticia.text}}</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Autor</span>
                <span class="ml-auto text-gray-900">{{noticia.authorName}}</span>
              </div>
          </div>
        <img alt="Imagem singlePage Noticia" class="lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded" :src="noticia.urlImage ?? 'https://pps.whatsapp.net/v/t61.24694-24/70374212_645198842715252_6571058794287476047_n.jpg?ccb=11-4&oh=480829809c1a4356d19b0a236cbacc3e&oe=62CE197B'">
      </div>
  </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router'

import services from '../../services'

export default {

  data () {
    const noticia = { }

    return {
      noticia
    }
  },

  methods: {
    async getSingleNew () {
      const { data, errors } = await services.news.getSingle(this.id)
      if (!errors) {
        this.noticia = data.data
        console.log(data)
      } else {
        console.log(errors)
      }
    }

  },
  setup () {
    const route = useRoute()
    const id = route.params.id

    return {
      id
    }
  },

  mounted () {
    this.getSingleNew()
  }

}
</script>

<style>

</style>
