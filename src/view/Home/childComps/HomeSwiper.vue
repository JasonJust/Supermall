<template>
  <swiper-list>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" style="width: 100%;height:100%" alt=""/>
        </a>
      </swiper-item>
    </swiper-list>
</template>

<script>
// import {SwiperList, SwiperItem} from 'components/common/swiper'
import SwiperList from 'components/common/swiper/SwiperList.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    SwiperList,
    SwiperItem
  }
}
</script>

<style>

</style>