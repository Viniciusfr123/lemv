<template>
  <main class="">
      <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
        <h1 class="text-4xl font-black text-black">Projetos</h1>
          <button @click="flagFilter = !flagFilter" class="focus:outline-none">
            <span class="inline">Filtrar: </span>
            <svg xmlns="http://www.w3.org/2000/svg" class=" inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
          <filter-data v-if="flagFilter" :dropBox="['Ensino Infantil','Ensino Médio','Graduação']" @filtrar="filtrar"/>
        <card v-for="c in state.cards" :key="c.id" :title="c.titulo" :img="c.urlImagem" :resume="c.descricao" :details="c.nomeAutor" :id="c.id" :redirect="redirect" resumeON="true"/>
      </div>
  </main>
</template>

<script>
import card from '../../components/Card/LemCard.vue'
import services from '../../services'
import FilterData from '../../components/Filter/index.vue'

export default {
  components: { FilterData, card },

  data () {
    const redirect = 'ProjetoSinglePage'
    const cards = []
    const flagFilter = false
    const state = {
      cards
    }

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
    async getProjects (categoria, dataInicio, dataFim) {
      const { data, errors } = await services.proj.getProjects()
      console.log(data[0])
      if (!errors) {
        this.state.cards = data
      } else {
        console.log(errors)
      }
    },

    filtrar (event) {
      if (event) {
        // this.getProject(event.categoria, event.dataInicio, event.dataFim)
        console.log(event.categoria, event.dataInicio, event.dataFim)
      }
    }

  },
  mounted () {
    this.getProjects()
  }
}
</script>
