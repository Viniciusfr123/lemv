<template>
  <div class="flex justify-center w-full">
    <h1 class="text-4xl font-black text-gray-800"> Criar notícia
    </h1>
  </div>

  <div>
    <div class="mt-16 mx-64">
      <form
       v-on:uploadImg="setMedia($event)"
       @submit.prevent="handleSubmit">
        <base-input
        v-model="state.news.title"
        label="Título"
        type="text"
        />

        <base-input-large
        v-model="state.news.description"
        label="Descrição"
        />

        <base-input
        v-model="state.news.authorName"
        label="Nome do autor"
        type="text"
        />

        <label class="block">
          <span class="text-lg font-medium text-gray-600">Imagem</span>
          <div>
            <input ref="file" v-on:change="handleFileUpload()"  type="file">
          </div>
        </label>

        <base-input-large
        v-model="state.news.text"
        label="Texto Principal"
        />
        <label class="block">
          <span class="text-lg font-medium text-gray-600">Competências</span>
          <select-input label="teste" :options="state.cards" @currentSelect="updateSelectCompetence($event)"/>
          <span class="text-lg font-medium text-gray-600">Abilidades</span>
          <checkbox :options="state.abilityOptions" @updateState="updateSelectAbility($event)"/>
        </label>

        <button :disabled="state.isLoading"
        type="submit"
        :class="{'opacity-50': state.isLoading}"
        class="px-8 py-3 mt-10 text-2x1 font-bold text-white rounded bg-brand-main focus:outline-nome"
        >
          Criar
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import services from '../../services'
import baseInput from '../../components/Form/baseInput.vue'
import baseInputLarge from '../../components/Form/baseInputLarge.vue'
import selectInput from '../../components/Form/selectInput.vue'
import Checkbox from '../../components/Form/checkbox.vue'

export default {
  components: { baseInput, baseInputLarge, selectInput, Checkbox },
  props: ['title', 'img', 'resume', 'details', 'id', 'resumeON', 'media'],

  setup (props) {
    const file = ref(null)
    const toast = useToast()
    const router = useRouter()
    const cards = []
    const abilityOptions = []
    let selectCompetence
    const currentAbilities = []

    const state = reactive({
      cards,
      abilityOptions,
      currentAbilities,
      selectCompetence,
      file: file,
      hasErrors: false,
      isLoading: false,

      news: {
        id: props.id,
        title: props.title,
        description: props.resume,
        authorName: props.details,
        text: props.details,
        media: props.media,
        skill: { code: currentAbilities, abilities: currentAbilities }
      }

    })

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.news.createOne(state.news)
        if (!errors) {
          state.isLoading = false
          toast.success(`Item ${data.data.id} criado com sucesso!`)
          router.push({ name: 'AdministradorNoticias' })
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ops, ocorreu um erro ao tentar criar o item')
        router.push({ name: 'AdministradorNoticias' })
      }
    }

    async function handleFileUpload () {
      const { data, errors } = await services.file.upload(file.value.files)
      if (!errors) {
        toast.success('Imagem anexada com sucesso')
        state.news.media = data.value
      } else {
        console.log(errors)
      }
    }

    async function getSkills () {
      const { data, errors } = await services.skill.getAll()
      if (!errors) {
        this.state.cards = data
        this.state.abilityOptions = data[0].abilities
        console.log(data)
      } else {
        console.log(errors)
      }
    }

    function updateSelectCompetence (value) {
      console.log({ cards: state.cards })
      state.selectCompetence = value
      console.log({ selected: state.selectCompetence })

      var competence = state.cards.find(c => c.code === state.selectCompetence)
      console.log(competence)

      state.abilityOptions = competence.abilities
    }

    function updateSelectAbility (value) {
      // console.log({ event: value })
      state.currentAbilities = value
    }

    return {
      state,
      handleSubmit,
      handleFileUpload,
      file,
      getSkills,
      updateSelectCompetence,
      updateSelectAbility
    }
  },

  mounted () {
    this.getSkills()
  }

}
</script>
