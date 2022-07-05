<template>
  <div class="flex justify-center w-full">
    <h1 class="text-4xl font-black text-gray-800"> Atualizar projeto
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
            class="absolute bottom-0 right-96 px-8 py-3 mt-10 text-2x1 font-bold text-white rounded bg-red-400 focus:outline-nome"
            >
            Add etapa
            </button>
          </form>
        </div>

        <button :disabled="state.isLoading"
        type="submit"
        :class="{'opacity-50': state.isLoading}"
        class="absolute bottom-0 right-64 px-8 py-3 mt-10 text-2x1 font-bold text-white rounded bg-brand-main focus:outline-nome"
        >
          Atualizar
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
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import services from '../../services'
import baseInput from '../../components/Form/baseInput.vue'
import BaseInputLarge from '../../components/Form/baseInputLarge.vue'

export default {
  components: { baseInput, BaseInputLarge },

  setup () {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    const toast = useToast()

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

      project: {
        titulo: '',
        descricao: '',
        nomeAutor: '',
        urlImagem: '',
        texto: '',
        manual: []
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
        console.log('update')
        const { data, errors } = await services.proj.updateOne(state.project)
        if (!errors) {
          state.isLoading = false
          toast.success(`Item ${data.data.id} Atualizado com sucesso!`)
          router.push({ name: 'AdministradorProjetos' })
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ops, ocorreu um erro ao tentar Atualizar o item')
      }
    }

    return {
      state,
      handleStage,
      handleProject,
      id
    }
  },

  methods: {
    async getSingleProject () {
      const { data, errors } = await services.proj.getSingle(this.id)
      if (!errors) {
        this.state.project = data.data
        console.log(data)
      } else {
        console.log(errors)
      }
    }
  },

  mounted () {
    this.getSingleProject()
  }

}
</script>
