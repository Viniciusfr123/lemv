
<template>
<swiper :navigation="true" :slidesPerView="1" :spaceBetween="30" :pagination='{
  "clickable": true
}' class="mySwiper">
  <swiper-slide v-for="etapa in manual" :key="etapa.index">
    <card :nomeEtapa="etapa.name" :descricao="etapa.description" :materiais="etapa.materials"/>
  </swiper-slide>
</swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import Card from '../Card/etapaProjeto'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// Import Swiper styles
import 'swiper/swiper.scss'

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core'

SwiperCore.use([Pagination, Navigation])

export default {
  props: {
    manual: {}
  },
  components: {
    Swiper,
    SwiperSlide,
    Card
  },
  mounted () {
  }

}
</script>
<style scoped>
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
