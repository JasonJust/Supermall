<template>
  <div class="home">
    <!-- <nav-bar class="nav-home">
      <div slot="nav-center">购物车</div>
    </nav-bar> -->
  </div>
</template>

<script>
//函数调用->压入函数栈（保存函数调用过程中所有变量）
//函数调用结束->弹出函数栈（释放函数所有的变量）

// import NavBar from '@components/common/navbar/NavBar.vue'
// import {getHomeMultidata} from '@network/home.js'

export default {
  name: 'Home',
  components: {
    // NavBar
  },
  data () {
    return {
      banner: []
    }
  },
  created () {
    // getHomeMultidata(res=>{
    //   this.banner = res.data.banner
    //   console.log(this.banner);
    // })
  }
}
</script>

<style>
.nav-home{
  background-color: var(--color-tint);
  color: white;
}
</style>