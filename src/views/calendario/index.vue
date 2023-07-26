<template>

  <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
      <h1 class="text-4xl font-black text-black">Calendário</h1>
      <div class="py-8">
        <iframe src="https://calendar.google.com/calendar/embed?src=lem.ifes.viroria%40gmail.com&ctz=America%2FSao_Paulo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
  </div>

</template>

<script>
import 'vue-cal/dist/vuecal.css'

export default {
  data () {
    function getWidth () {
      return window.screen.width
    }

    return {
      getWidth
    }
  }

}
</script>
