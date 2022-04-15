<template>
  <main class="flex-col ">
        <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
          <h1 class="text-4xl font-black text-black">Notícias</h1>
            <button @click="flagFilter = !flagFilter" class="focus:outline-none">
              <span class="inline">Filtrar: </span>
              <svg xmlns="http://www.w3.org/2000/svg" class=" inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
          </button>
           <filter-data v-if="flagFilter" :dropBox="['Ensino Infantil','Ensino Médio','Graduação']" @filtrar="filtrar"/>
          <card v-for="c in state.cards" :key="c.id" :title="c.NewsTitle" :img="c.urlImage" :resume="c.description" :details="c.authorName" :id="c.id" :redirect="redirect"/>
        </div>
  </main>
</template>

<script>
import card from '../../components/Card/LemCard.vue'
import FilterData from '../../components/Filter/index.vue'
import { reactive } from 'vue'
import services from '../../services'

export default {
  components: { FilterData, card },

  data () {
    const redirect = 'NoticiaSinglePage'
    const flagFilter = false
    const cards = []
    const state = reactive({
      cards
    })

    return {
      state,
      redirect,
      flagFilter,
      categoria: '',
      dataInicio: '',
      dataFim: ''
    }
  },

  methods: {
    async getNews () {
      const { data, errors } = await services.news.getNews()
      if (!errors) {
        this.state.cards = data
      } else {
        console.log(errors)
      }
    },
    filtrar (value) {
      console.log(value)
    }
  },

  mounted () {
    this.getNews()
  }
}
</script>
