<template>
  <div class="flex justify-between">
    <h1 class="text-2xl font-black text-gray-800"> Criar notícia
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

        <base-input
        v-model="state.news.urlImage"
        label="Link da imagem"
        type="text"
        />

        <base-input-large
        v-model="state.news.text"
        label="Texto Principal"
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
  props: ['title', 'img', 'resume', 'details', 'id', 'resumeON'],

  setup (props) {
    const modal = useModal()
    const toast = useToast()

    const state = reactive({
      hasErrors: false,
      isLoading: false,

      news: {
        id: props.id,
        title: props.title,
        description: props.resume,
        authorName: props.details,
        urlImage: props.img,
        text: props.details
      }

    })

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.news.createOne(state.news)
        if (!errors) {
          state.isLoading = false
          modal.close()
          toast.success(`Item ${data.id} criado com sucesso!`)
          await this.$emit('list')
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
      close: modal.close
    }
  }

}
</script>
