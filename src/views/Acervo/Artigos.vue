<template>
    <main class="flex-col ">
        <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
          <card v-for="c in state.cards" :key="c.id" :title="c.title" :img="c.img" :resume="c.resume"/>
        </div>
  </main>
</template>
<script>
import card from '../../components/Card/MaterialCard.vue'
import { reactive } from 'vue'
import services from '../../services'

export default {
  components: { card },

  data () {
    const cards = []
    const state = reactive({
      cards
    })

    return {
      state
    }
  },

  methods: {
    async getMaterial () {
      const { data, errors } = await services.material.getMaterial()
      if (!errors) {
        this.state.cards = data
      } else {
        console.log(errors)
      }
    }
  },

  mounted () {
    this.getMaterial()
  }
}
</script>

<style>

</style>
