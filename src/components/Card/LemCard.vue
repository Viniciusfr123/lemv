<template>
  <div class="bg-white w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none p-1">
    <div
        :style="{backgroundImage: 'url(\'' +  state.img  + '\')'}"
        class="h-52 sm:h-50 sm:w-52 rounded-xl bg-gray-100 bg-center bg-cover hidden lg:block"
    ></div>
    <div class="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 v-if="resumeON" class="text-lg sm:text-xl font-semibold  text-gray-600">
            {{title}}
        </h1>
        <h1 v-else class="text-lg sm:text-xl font-semibold  text-gray-600">
            {{title.substr(0,50)}}
        </h1>
        <p v-if="resumeON" class="text-gray-500 text-sm sm:text-base line-clamp-3">
            {{resume}}
        </p>
        <div class="flex gap-4 mt-auto">

        <span class='mr-auto text-brand-main flex items-center gap-1 sm:text-lg '>
        {{details}}
        </span>
        <button v-on:click="pushPage()"
            class='ml-auto text-brand-main flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'>
            <span>mais</span>
        </button>
        </div>
    </div>
    <img :src="state.details" />
</div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import services from '../../services'

export default {
  props: {
    title: {
      default: '',
      type: String
    },
    imgId: {
      default: '',
      type: String
    },
    img: {
      default: 'data:image/png;base64,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'
    },
    resume: {
      default: '',
      type: String
    },
    details: {
    },
    redirect: {

    },
    id: {
    },
    resumeON: {
    },
    media: {
      type: Object
    }
  },
  setup (props) {
    const img = ''
    const state = reactive({
      img
    })
    const router = useRouter()

    function pushPage () {
      router.push({ name: props.redirect, params: { id: props.id } })
    }

    async function downloadImg () {
      if (props.media) {
        const { data, errors } = await services.file.download(props.media.fileId)
        if (!errors) {
          var fileURL = window.URL.createObjectURL(new Blob([data]))
          this.state.img = fileURL
        } else {
          console.log('result')
          console.log(errors)
        }
      }
    }

    async function toDownloadFile (data, format) {
      var fileURL = window.URL.createObjectURL(new Blob([data]))
      var fileLink = document.createElement('a')

      fileLink.href = fileURL
      fileLink.setAttribute('download', format)
      document.body.appendChild(fileLink)

      fileLink.click()
    }

    return {
      pushPage,
      downloadImg,
      toDownloadFile,
      state
    }
  },

  mounted () {
    this.downloadImg()
  }
}

</script>
