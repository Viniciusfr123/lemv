<template>
  <div class="grid grid-col-2 items-center md:grid-col-2">
      <form>
        <select v-model="categoria">
            <option disabled value="">Categoria</option>
            <option v-for="op in dropBox" :key="op">
              {{op}}
            </option>
            <option value="">Nenhuma</option>
        </select>
        <div>
            <label type="text">Data Inicio: </label>
            <input v-model="dataInicio" type="date">
            <label type="text">Data Fim: </label>
            <input v-model="dataFim" type="date">
        </div>
      </form>
      <button
      class="bg-gray-300 rounded-md px-3" @click="() => $emit('filtrar', {categoria, dataInicio, dataFim})">Filtrar
      </button>
  </div>
</template>

<script>
export default {

  props: {
    dropBox: Array,
    test: String
  },
  emits: ['filtrar'],
  data () {
    const categoria = String
    const dataInicio = ''
    const dataFim = ''

    return {
      categoria,
      dataInicio,
      dataFim
    }
  }

}
</script>
