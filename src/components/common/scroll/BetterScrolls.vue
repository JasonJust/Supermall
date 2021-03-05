<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BetterScrolls',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper,{
      mouseWheel: true,//启用鼠标
      disableTouch: false,//禁用触摸
      probeType: 3,//滚动侦听
      pullUpLoad: true,//上拉加载
    })

    this.scroll.on('scroll', (position) => {
      console.log(position);
    })

    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多！');

      setTimeout(() => {
        this.scroll.finishPullUp()
      },2000)
    })

  }
}
</script>

<style>
  .wrapper{
    overflow: hidden;
  }
</style>