<template>
  <div class="home">
    <nav-bar class="nav-home">
      <div slot="nav-center">购物车</div>
    </nav-bar>
    <swiper-list>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <img slot="swiper-img" :src="item.image" style="width: 100%;height:100%" alt=""/>
      </swiper-item>
    </swiper-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home.js'
import SwiperList from '../../components/common/swiper/SwiperList.vue'
import SwiperItem from '../../components/common/swiper/SwiperItem.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SwiperList,
    SwiperItem
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // this.$nextTick(()=>{
      //   new Swiper('.swiper-container',{})
      // })
    })
  }
}
</script>

<style>
.nav-home{
  background-color: var(--color-tint);
  color: white;
}
</style>