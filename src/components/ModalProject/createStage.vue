<template>
  <div class="flex justify-between">
    <h1 class="text-2xl font-black text-gray-800"> Editar Estapa Manual
    </h1>
    <button
    class="text-4xl text-gray-600 focus:outline-none"
    @click='close'>&times;
    </button>
  </div>

  <div>
    <div class="mt-16">
      <form @submit.prevent="handleSubmit">
        <base-input
        v-model="state.stage.titulo"
        label="Nome etapa"
        type="text"
        />

        <base-input-large
        v-model="state.stage.descricao"
        label="Descrição"
        />

        <base-input
        v-model="state.stage.materiais"
        label="Nome do autor"
        type="text"
        />

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
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import useModal from '../../hooks/useModal'
import services from '../../services'
import baseInput from '../Form/baseInput.vue'
import BaseInputLarge from '../Form/baseInputLarge.vue'

export default {
  components: { baseInput, BaseInputLarge },

  setup (props) {
    const modal = useModal()
    const toast = useToast()

    var stagedto = {
      ordem: '',
      nomeEtapa: '',
      descricao: '',
      materiais: []
    }

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      editStage: true,

      stage: {
        ordem: '',
        nomeEtapa: '',
        descricao: '',
        authorName: '',
        materiais: ''
      }

    })

    function addStage () {
      stagedto.ordem = state.project.manual.length
      const clone = JSON.parse(JSON.stringify(stagedto))
      this.updateEditStage()
      state.project.manual.push(clone)
      this.resetStagedto()
      console.log(state.project.manual)
    }

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.proj.createOne(state.project)
        if (!errors) {
          state.isLoading = false
          modal.close()
          toast.success(`Item ${data.id} criado com sucesso!`)
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ops, ocorreu um erro ao tentar criar o item')
      }
    }

    return {
      state,
      handleSubmit,
      addStage,
      close: modal.close
    }
  }

}
</script>
