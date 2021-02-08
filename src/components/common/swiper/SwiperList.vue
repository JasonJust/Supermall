<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: 'SwiperList',
  mounted() {
    setTimeout(()=>{
      new Swiper('.swiper-container',{
        loop:true,
        loopFillGroupWithBlank: true,
        // observer:true,
        // observeParents:true,
        // observeSlideChildren:true,
        speed: 3000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        }
      })
    },2000)
  },
}
</script>

<style scoped>
.swiper-container{
  width:100%;
}
.swiper-pagination{
  width: 100px;
  height: 100px;
}
</style>