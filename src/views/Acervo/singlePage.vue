<template>
<section class="text-gray-600 body-font overflow-hidden">
   <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
         <div class="lg:w-4/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{state.artifact.name}}</h1>
            <p class="leading-relaxed mb-4">{{state.artifact.description}}</p>
            <div>
              <h1 class="text-gray-900 text-1xl title-font font-medium mb-4"> {{'Palavras-chave'}}</h1>
              <p class="leading-relaxed mb-4">{{state.artifact.tags ? formatKeyWord(state.artifact.tags) : ''}}</p>
            </div>
         </div>
         <div class="lg:w-2/6 w-full h-auto object-cover object-center rounded">
            <div class="h-90">
              <imagens :imgs="state.artifact.urlImages"/>
            </div>
            <skill-resume v-if="state.artifact.skill" :skill="state.artifact.skill"/>
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
    const artifact = {}
    const imgs = ['/img/principal.aa4e4091.png']
    const state = reactive({
      imgs,
      artifact
    })

    async function getSingleArt () {
      const { data, errors } = await services.art.getSingle(this.id)
      if (!errors) {
        state.artifact = data.data
      } else {
        console.log(errors)
      }
    }

    function formatKeyWord (lst) {
      return lst.toString().replace(',', ', ')
    }

    return {
      id,
      state,
      getSingleArt,
      formatKeyWord
    }
  },

  mounted () {
    this.getSingleArt()
  }
}

</script>
