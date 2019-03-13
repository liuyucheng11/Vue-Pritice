<template>
   <div>
     <el-container>
       <el-header>
         {{header}}
       </el-header>
       <el-container>
         <el-aside>
           <MenuSlider :baseRoute="baseRoute" :menuData="userOperations">
           </MenuSlider>
         </el-aside>
         <el-main>
           <router-view></router-view>
         </el-main>
       </el-container>
     </el-container>

   </div>
</template>

<script>
import MenuSlider from '@/views/MenuSlider'
export default {
  name: 'Container',
  components: {MenuSlider},
  data () {
    return {
      baseRoute: '/user',
      header: '你好',
      userOperations: [
        {
          iconType: 'el-icon-success',
          content: '菜单一',
          partRoute: 'menu-1'
        },
        {
          iconType: 'el-icon-success',
          content: '菜单二',
          partRoute: 'menu-2'
        },
        {
          iconType: 'el-icon-success',
          content: '找作者',
          partRoute: 'menu-3'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
