<template>
  <el-menu>
    <el-menu-item v-for="(item,index) in menuData" :key="index" @click.native="toRoute(`${baseRoute}/${item.partRoute}`)">
      <span slot="title">{{item.content}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'MenuSlider',
  props: ['baseRoute', 'menuData'],
  data () {
    return {

    }
  },
  methods: {
    toRoute (route) {
      this.$router.push(route)
    }
  }

}
</script>

<style scoped>

</style>
