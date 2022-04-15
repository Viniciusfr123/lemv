<template>
  <div class="flex flex-col items-center w-3/5   mx-auto px-6 py-8 gap-1">
    <div class="flex flex-wrap justify-items-center-m-10">
        <admin-card alias="Início"/>
        <admin-card alias="Noticias"/>
        <admin-card alias="SobreNos"/>
        <admin-card alias="Contato"/>
        <admin-card alias="Projetos"/>
        <admin-card alias="Acervo"/>
    </div>
  </div>

</template>

<script>
import AdminCard from '../../components/Card/adminCard.vue'

export default {
  components: { AdminCard }
}

</script>
