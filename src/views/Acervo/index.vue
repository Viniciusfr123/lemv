<template>
<section class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1 text-gray-600 body-font">
  <h1 class="text-4xl font-black justify-center text-black">Acervo</h1>
  <div class="container px-5 py-5 mx-auto flex flex-wrap flex-col">
    <div class="flex mx-auto flex-wrap">
      <a v-if="state.Materiais" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        Materiais
      </a>
      <a v-else v-on:click="changeSelectSection('Materiais')" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        Materiais
      </a>
      <a v-if="state.Livros" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        Livros
      </a>
      <a v-else v-on:click="changeSelectSection('Livros')" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        Livros
      </a>
      <a v-if="state.Artigos" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        Artigos
      </a>
      <a v-else v-on:click="changeSelectSection('Artigos')" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        Artigos
      </a>
    </div>
      <section-artigos v-if="state.Artigos"/>
      <section-livros v-if="state.Livros"/>
      <section-materiais v-if="state.Materiais"/>
  </div>
</section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import sectionLivros from './Livros.vue'
import sectionArtigos from './Artigos.vue'
import sectionMateriais from './Materiais.vue'

export default {
  components: { sectionLivros, sectionArtigos, sectionMateriais },

  setup () {
    const state = reactive({
      sectionOn: 'Materiais',
      Materiais: true,
      Livros: false,
      Artigos: false
    })

    function changeSelectSection (sectioOn) {
      switch (sectioOn) {
        case 'Materiais':
          state.Livros = false
          state.Artigos = false
          state.Materiais = true
          break
        case 'Livros':
          state.Materiais = false
          state.Artigos = false
          state.Livros = true
          break
        case 'Artigos':
          state.Livros = false
          state.Materiais = false
          state.Artigos = true
          break
      }
    }

    return {
      state,
      changeSelectSection
    }
  }

}
</script>
