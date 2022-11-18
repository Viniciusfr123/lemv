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
            {{title !== null ? title.substr(0,50): ''}}
        </h1>
        <p v-if="resumeON" class="text-gray-500 text-sm sm:text-base line-clamp-3">
            {{resume.substr(0,200) + '...'}}
        </p>
        <div class="flex gap-4 mt-auto">

        <span class='mr-auto text-brand-main flex items-center gap-1 sm:text-lg '>
        {{details}}
        </span>
        <div v-if="type != null" class="flex">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 46 50">
            <path :d="state.icon"/>
          </svg>
          <h3 class="font-semibold">{{state.type}}</h3>
        </div>
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
    media: null,
    type: null
  },
  setup (props) {
    const img = '/img/principal.aa4e4091.png'
    const state = reactive({
      img
    })
    const router = useRouter()

    function pushPage () {
      router.push({ name: props.redirect, params: { id: props.id } })
    }

    async function downloadImg () {
      if (props.media != null) {
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

    function setTypeIcon () {
      switch (props.type) {
        case 'livro':
          this.state.icon = 'M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h26q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h26V7h-3v13.3l-4.85-2.8-4.85 2.8V7H11v34Zm0 0V7v34Zm13.3-20.7 4.85-2.8L34 20.3l-4.85-2.8-4.85 2.8Z'
          this.state.type = 'livro'
          break
        case 'filme':
          this.state.icon = 'm7 8 3.7 7.6h6.5L13.5 8h4.45l3.7 7.6h6.5L24.45 8h4.45l3.7 7.6h6.5L35.4 8H41q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8Zm0 10.6V37h34V18.6Zm0 0V37Z'
          this.state.type = 'filme'
          break
        case 'video':
          this.state.icon = 'm23.5 27.85 8.75-5.6q.7-.45.7-1.25t-.7-1.25l-8.75-5.6q-.75-.5-1.525-.075-.775.425-.775 1.325v11.2q0 .9.775 1.325.775.425 1.525-.075ZM13 38q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h28V7H13v28Zm-6 9q-1.2 0-2.1-.9Q4 42.2 4 41V11.5q0-.65.425-1.075Q4.85 10 5.5 10q.65 0 1.075.425Q7 10.85 7 11.5V41h29.5q.65 0 1.075.425Q38 41.85 38 42.5q0 .65-.425 1.075Q37.15 44 36.5 44Zm6-37v28V7Z'
          this.state.type = 'video'
          break
        case 'artigo':
          this.state.icon = 'M13.85 34.05H27.6v-3H13.85Zm0-8.55h20.3v-3h-20.3Zm0-8.55h20.3v-3h-20.3ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z'
          this.state.type = 'artigo'
          break
        case 'material-didático-pedagógicos':
          this.state.icon = 'm22.4 39.65-11-6.45q-.7-.4-1.075-1.1-.375-.7-.375-1.5V17.75q0-.8.375-1.5t1.075-1.1L22.45 8.6q.7-.4 1.55-.4.85 0 1.55.4l11.05 6.55q.7.4 1.075 1.1.375.7.375 1.5V30.6q0 .8-.4 1.5t-1.1 1.1L25.4 39.65q-.7.4-1.5.4t-1.5-.4Zm.1-3.45V25L13 19.55V30.5Zm3 0 9.55-5.7V19.55L25.5 25ZM2 11.45V7.6q0-2.35 1.625-3.975T7.6 2h3.85v3H7.6q-1.1 0-1.85.75T5 7.6v3.85ZM7.6 46q-2.35 0-3.975-1.625T2 40.4v-3.85h3v3.85q0 1.1.75 1.85T7.6 43h3.85v3Zm28.95-.2v-3h3.85q1.1 0 1.85-.75T43 40.2v-3.85h3v3.85q0 2.35-1.625 3.975T40.4 45.8ZM43 11.45V7.6q0-1.1-.75-1.85T40.4 5h-3.85V2h3.85q2.35 0 3.975 1.625T46 7.6v3.85ZM24 22.3l9.5-5.5-9.5-5.45-9.5 5.45Zm0 1.25Zm0-1.25Zm1.5 2.7Zm-3 0Z'
          this.state.type = 'material didático pedagógicos'
          break
        case 'revista':
          this.state.icon = 'M28 17.6q0-.3.2-.575.2-.275.45-.375 1.5-.55 3.075-.85 1.575-.3 3.275-.3 1.1 0 2.15.125 1.05.125 2.05.375.3.1.55.375.25.275.25.625 0 .55-.375.85-.375.3-.925.15-.85-.25-1.775-.375Q36 17.5 35 17.5q-1.45 0-2.8.275-1.35.275-2.65.825-.7.25-1.125-.025Q28 18.3 28 17.6Zm0 11q0-.3.2-.6t.45-.4q1.5-.55 3.075-.825Q33.3 26.5 35 26.5q1.1 0 2.15.125 1.05.125 2.05.375.3.1.55.375.25.275.25.625 0 .55-.375.85-.375.3-.925.15-.85-.25-1.775-.375Q36 28.5 35 28.5q-1.45 0-2.8.25-1.35.25-2.65.8-.7.25-1.125 0Q28 29.3 28 28.6Zm0-5.5q0-.3.2-.575.2-.275.45-.375 1.5-.55 3.075-.85Q33.3 21 35 21q1.1 0 2.15.125 1.05.125 2.05.375.3.1.55.375.25.275.25.625 0 .55-.375.85-.375.3-.925.15-.85-.25-1.775-.375Q36 23 35 23q-1.45 0-2.8.275-1.35.275-2.65.825-.7.25-1.125-.025Q28 23.8 28 23.1ZM12.4 33q2.7 0 5.225.625 2.525.625 4.975 1.875V14.15q-2.25-1.5-4.875-2.325Q15.1 11 12.4 11q-1.9 0-3.725.475Q6.85 11.95 5 12.65v21.7q1.55-.7 3.525-1.025Q10.5 33 12.4 33Zm13.2 2.5q2.5-1.25 4.9-1.875Q32.9 33 35.6 33q1.9 0 3.925.3t3.475.8V12.65q-1.7-.85-3.6-1.25-1.9-.4-3.8-.4-2.7 0-5.225.825-2.525.825-4.775 2.325ZM13.8 23.55Zm10.3 15.9q-.4 0-.725-.075-.325-.075-.575-.275-2.35-1.45-5-2.25t-5.4-.8q-1.85 0-3.6.45t-3.5 1.1q-1.15.55-2.225-.15Q2 36.75 2 35.45V12.3q0-.75.35-1.375T3.4 9.95q2.1-1 4.375-1.475Q10.05 8 12.4 8q3.15 0 6.125.85t5.575 2.6q2.55-1.75 5.475-2.6Q32.5 8 35.6 8q2.35 0 4.6.475 2.25.475 4.35 1.475.7.35 1.075.975T46 12.3v23.15q0 1.4-1.125 2.125-1.125.725-2.225.025-1.7-.7-3.45-1.125-1.75-.425-3.6-.425-2.7 0-5.3.8-2.6.8-4.9 2.25-.25.2-.575.275-.325.075-.725.075Z'
          this.state.type = 'revista'
          break
        default:
      }
    }

    return {
      pushPage,
      downloadImg,
      toDownloadFile,
      setTypeIcon,
      state
    }
  },

  mounted () {
    this.setTypeIcon()
    this.downloadImg()
  }
}

</script>
