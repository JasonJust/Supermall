<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path.indexOf(this.path) === -1) {
        this.$router.push(this.path)
        console.log(this.$route.path,this.$route.path.indexOf(this.path) === -1);
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;//拿到当前活动得路由
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
  margin-top: 3px;
}
/* .active{
  color: red;
} */
</style>