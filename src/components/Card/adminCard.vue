<template>
    <div class="xl:w-2/4 md:w-1/2 p-4">
    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-200 active:bg-green-700">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        </div>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{{ alias }}</h2>
        <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit non leo mattis lobortis sed ac augue.</p>
    <button v-on:click="pushAdminPage()"
    class='ml-auto text-brand-main flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
    >
    <span>Atualizar</span>
    </button>
    </div>
    </div>

</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: ['alias'],

  setup (props) {
    const router = useRouter()

    function pushAdminPage () {
      router.push({ name: `Administrador${props.alias}` })
    }

    return {
      pushAdminPage
    }
  }
}
</script>
