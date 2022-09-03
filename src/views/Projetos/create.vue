<template>
  <div class="flex justify-center w-full">
    <h1 class="text-4xl font-black text-gray-800"> Criar projeto
    </h1>
  </div>

  <div>
    <div class="mt-16 mx-64">
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

        <base-input
        v-model="state.project.urlImagem"
        label="Link da imagem"
        type="text"
        />

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
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import services from '../../services'
import baseInput from '../../components/Form/baseInput.vue'
import BaseInputLarge from '../../components/Form/baseInputLarge.vue'
import selectInput from '../../components/Form/selectInput.vue'
import Checkbox from '../../components/Form/checkbox.vue'

export default {
  components: { baseInput, BaseInputLarge, selectInput, Checkbox },

  setup (props) {
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
        urlImagem: '',
        texto: '',
        manual: [],
        skill: { code: '', abilities: [] }
      }
    })

    function handleStage () {
      state.project.manual.push({ ...state.stageDto })
      console.log(state.project.manual)
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
        const { data, errors } = await services.proj.createOne(state.project)
        if (!errors) {
          state.isLoading = false
          toast.success(`Item ${data.data.id} criado com sucesso!`)
          router.push({ name: 'AdministradorProjetos' })
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ops, ocorreu um erro ao tentar criar o item')
      }
    }

    async function getSkills () {
      const { data, errors } = await services.skill.getAll()
      if (!errors) {
        this.state.skills = data
        this.state.abilityOptions = data[0].abilities
      } else {
        console.log(errors)
      }
    }

    function updateSelectCompetence (value) {
      state.selectCompetence = value
      state.project.skill.code = value

      var competence = state.skills.find(c => c.code === state.selectCompetence)

      state.abilityOptions = competence.abilities
    }

    function updateSelectAbility (value) {
      state.currentAbilities = value
      state.project.skill.abilities = value
    }

    return {
      state,
      handleStage,
      handleProject,
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
