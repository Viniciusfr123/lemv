<template>
  <main class="flex-col ">
        <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
          <h1 class="text-4xl font-black text-black">Acervo</h1>
          <input
            id="search"
            v-model="state.searchPayload"
            type="search"
            class="field w-1/3 bg-gray-100 bg-opacity-50 rounded border border-green-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Filtrar..."
          />
          <card v-for="c in filterList()" :key="c.id" :title="c.title" :resume="c.resume" :details="c.auth" :redirect="redirect" :type="c.type" resumeON="true" :media="c.media"/>
        </div>
  </main>
</template>

<script>
import card from '../../components/Card/LemCard.vue'
import { reactive } from 'vue'
import services from '../../services'

export default {
  components: { card },

  setup () {
    const redirect = 'AcervoSinglePage'
    const searchPayload = ''
    const cards = [
      {
        id: 1,
        title: 'Acervo Teste 1',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'livro',
        skill: {},
        auth: 'Thalles'
      },
      {
        id: 2,
        title: 'Acervo Teste 2',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'filme',
        skill: {},
        auth: 'Lucas'
      },
      {
        id: 3,
        title: 'Acervo Teste 3',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'artigo',
        skill: {},
        auth: 'Leonardo'
      },
      {
        id: 4,
        title: 'Acervo Teste 3',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'material-didático-pedagógicos',
        skill: {},
        auth: 'Leonardo'
      },
      {
        id: 5,
        title: 'Acervo Teste 3',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'filme',
        skill: {},
        auth: 'Leonardo'
      },
      {
        id: 6,
        title: 'Acervo Teste 3',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'video',
        skill: {},
        auth: 'Leonardo'
      },
      {
        id: 7,
        title: 'Acervo Teste 3',
        resume: 'Acervo Testes resume',
        details: 'Acervo Teste details',
        media: null,
        classification: 'LIVRE',
        type: 'revista',
        skill: {},
        auth: 'Leonardo'
      }
    ]
    const state = reactive({
      cards,
      searchPayload
    })

    function filterList () {
      if (this.state.searchPayload !== '') {
        console.log(this.state.searchPayload)
        return this.state.cards.filter((item) =>
          `${item.title} ${item.auth} ${item.type}`.toLowerCase()
            .includes(this.state.searchPayload.toLowerCase())
        )
      } else {
        return this.state.cards
      }
    }

    // TODO PEDIR UMA ROTA QUE JUNTA MATERIAS LIVROS E ARTIGOS
    async function getAcervo () {
      const { data, errors } = await services.acervo.getAcervo()
      if (!errors) {
        this.state.cards.push(...data)
      } else {
        console.log(errors)
      }
    }
    // TODO PEDIR UMA ROTA QUE JUNTA MATERIAS LIVROS E ARTIGOS

    return {
      getAcervo,
      filterList,
      state,
      redirect
    }
  },

  mounted () {
    // this.getAcervo()
  }
}
</script>
