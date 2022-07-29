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

export default {
  components: { baseInput, baseInputLarge },
  props: ['title', 'img', 'resume', 'details', 'id', 'resumeON', 'media'],

  setup (props) {
    const file = ref(null)
    const toast = useToast()
    const router = useRouter()

    const state = reactive({
      file: file,
      hasErrors: false,
      isLoading: false,

      news: {
        id: props.id,
        title: props.title,
        description: props.resume,
        authorName: props.details,
        text: props.details,
        media: props.media
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

    return {
      state,
      handleSubmit,
      handleFileUpload,
      file
    }
  }

}
</script>
