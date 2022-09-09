<template>
  <div class="flex justify-center w-full">
    <h1 class="text-4xl font-black text-gray-800"> Criar projeto
    </h1>
  </div>

  <div>
    <div class="mt-16 mx-2 md:mx-32 lg:mx-64">
      <form @submit.prevent="handleProject">
        <base-input
        v-model="state.project.titulo"
        label="Título"
        type="text"
        />

        <base-input-large
        v-model="state.project.descricao"
        label="Descrição"
        />

        <base-input
        v-model="state.project.nomeAutor"
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
        v-model="state.project.texto"
        label="Texto Principal"
        />

        <label class="block">
          <span class="text-lg font-medium text-gray-600">Competências</span>
          <select-input label="teste" :options="state.skills" @currentSelect="updateSelectCompetence($event)"/>
          <span class="text-lg font-medium text-gray-600">Abilidades</span>
          <checkbox :options="state.abilityOptions" @updateState="updateSelectAbility($event)"/>
        </label>

        <div class="mt-4 mx-4">
          <span class="text-lg font-medium text-gray-600"> Etapa Manual </span>
          <form @submit.prevent="handleStage">
            <base-input
            v-model="state.stageDto.nomeEtapa"
            label="Título"
            type="text"
            />
            <base-input
            v-model="state.stageDto.descricao"
            label="Descrição"
            type="text"
            />
            <base-input
            v-model="state.stageDto.ordem"
            label="Ordem"
            type="Number"
            />

            <button :disabled="state.isLoading"
            type="submit"
            :class="{'opacity-50': state.isLoading}"
            class="px-8 py-3 mt-10 text-2x1 font-bold text-white rounded bg-brand-main focus:outline-nome"
            >
            Add etapa
            </button>
          </form>
        </div>

        <button :disabled="state.isLoading"
        type="submit"
        :class="{'opacity-50': state.isLoading}"
        class="px-8 py-3 mt-10 text-2x1 font-bold text-white rounded bg-brand-main focus:outline-nome"
        >
          Criar
        </button>
      </form>
      <span class="text-lg font-medium text-gray-600">Etapas Manual</span>
      <ul class="list-disc my-10 mb-10">
        <li v-for="stage in state.project.manual" :key="stage.ordem">
          {{ stage.ordem }} - Nome: {{stage.nomeEtapa}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
import services from '../../services'
import baseInput from '../../components/Form/baseInput.vue'
import BaseInputLarge from '../../components/Form/baseInputLarge.vue'
import selectInput from '../../components/Form/selectInput.vue'
import Checkbox from '../../components/Form/checkbox.vue'

export default {
  components: { baseInput, BaseInputLarge, selectInput, Checkbox },

  setup (props) {
    const file = ref(null)
    const toast = useToast()
    const skills = []
    const abilityOptions = []
    let selectCompetence
    const currentAbilities = []
    const router = useRouter()

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      editStage: true,
      stageDto: {
        ordem: '',
        nomeEtapa: '',
        descricao: '',
        materiais: []
      },
      skills,
      abilityOptions,
      selectCompetence,
      currentAbilities,
      project: {
        titulo: '',
        descricao: '',
        nomeAutor: '',
        media: '',
        texto: '',
        manual: [],
        skillId: -1,
        abilitieIds: []
      }
    })

    function handleStage () {
      if (state.stageDto.ordem === '' || state.stageDto.nomeEtapa === '' || state.stageDto.nomeEtapa === '') {
        toast.warning('Todos os campos da etapa do projeto são obrigatórios')
        return
      }
      var index = state.project.manual.findIndex((i) => i.ordem === state.stageDto.ordem)
      if (index !== -1) {
        state.project.manual[index] = state.stageDto
        toast.success(`Etapa de ordem ${state.stageDto.ordem} foi atualizada`)
      } else {
        state.project.manual.push({ ...state.stageDto })
        toast.success('Nova etapa adicionada, verifique o campo "Etapas do Manual" no final da página')
      }
      state.stageDto = {
        ordem: '',
        nomeEtapa: '',
        descricao: '',
        materiais: []
      }
      state.editStage = false
    }

    async function handleProject () {
      try {
        state.isLoading = true
        validSchema()
        console.log({ project: JSON.stringify(state.project) })
        const { data, errors } = await services.proj.createOne(state.project)
        if (!errors) {
          state.isLoading = false
          console.log(state.project)
          toast.success(`Item ${data.data.id} criado com sucesso!`)
          router.push({ name: 'AdministradorProjetos' })
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ops, ocorreu um erro ao tentar criar o item')
        router.push({ name: 'AdministradorProjetos' })
      }
    }

    function setSkillToSend () {
      state.project.skillId = state.selectCompetence.id
      state.project.abilitieIds = filterAbilityIds()
    }

    // verifica se os campos obrigatórios estão preenchidos
    // e prepara o objeto para a API
    function validSchema () {
      try {
        // TODO valid schema
        setSkillToSend()
      } catch (error) {
        toast.warning(error)
      }
    }

    async function getSkills () {
      const { data, errors } = await services.skill.getAll()
      if (!errors) {
        this.state.skills = data
        this.state.project.skillId = data[0].id
        this.state.selectCompetence = data[0]
        this.state.abilityOptions = data[0].abilities
      } else {
        console.log(errors)
      }
    }

    function updateSelectCompetence (value) {
      console.log(`ID: ${value}`)
      console.log({ cards: state.skills })

      state.selectCompetence = state.skills.find(c => c.code === value)

      console.log(state.selectCompetence)
      state.project.skillId = state.selectCompetence.id
      state.abilityOptions = state.selectCompetence.abilities
    }

    function updateSelectAbility (value) {
      console.log({ event: value })
      state.currentAbilities = value
    }

    // a partir da lista de skills selecionadas retornando uma lista de ids das abilidades
    // correspondentes a competencia selecionada
    function filterAbilityIds () {
      const filterByCompetence = state.currentAbilities.filter((i) => state.selectCompetence.abilities.includes(i))
      return filterByCompetence.map((i) => i.id)
    }
    async function handleFileUpload () {
      const { data, errors } = await services.file.upload(file.value.files)
      if (!errors) {
        toast.success('Imagem anexada com sucesso')
        state.project.media = data.value
      } else {
        console.log(errors)
      }
    }

    return {
      state,
      file,
      handleStage,
      handleProject,
      getSkills,
      updateSelectCompetence,
      updateSelectAbility,
      handleFileUpload,
      validSchema
    }
  },

  mounted () {
    this.getSkills()
  }

}
</script>
