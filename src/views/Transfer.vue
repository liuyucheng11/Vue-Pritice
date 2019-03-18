<template>
  <div class='select-variable'>
    <el-row>
      <el-col span="6" offset="2">
        <el-table class="total-variable" highlight-current-row border  @selection-change="selectionChangeLeft" :data="all" >
          <el-table-column v-if="false" prop="id"></el-table-column>
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="code" label="变量"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
        </el-table>
      </el-col>
      <el-col span="2" offset="1" class="button-col">
        <div class="button-group">
          <el-button type="primary" size="small" :disabled="leftButtonDisable" class="button-select el-icon-arrow-right" round @click="selectVariable"></el-button>
          <el-button type="primary" size="small" :disabled="rightButtonDisable" class="button-select el-icon-arrow-left" round @click="abandonVariable"></el-button>
        </div>
      </el-col>
      <el-col span="6" offset="1">
        <el-table class="selected-variable"  :data="selected" highlight-current-row border   @selection-change="selectionChangeRight">
          <el-table-column v-if="false" prop="id"></el-table-column>
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="code" label="变量"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      // all代表全部数据
      all: [{
        id: 1,
        code: 'aaaa',
        name: 'aaaa'
      }, {
        id: 2,
        code: 'aaaa2',
        name: 'aaaa2'
      },
      {
        id: 3,
        code: 'aaaa3',
        name: 'aaaa2'
      },
      {
        id: 4,
        code: 'aaaa4',
        name: 'aaaa2'
      }, {
        id: 5,
        code: 'aaaa5',
        name: 'aaaa2'
      }, {
        id: 6,
        code: 'aaaa6',
        name: 'aaaa2'
      }, {
        id: 7,
        code: 'aaaa7',
        name: 'aaaa2'
      }],
      // 项目选择变量
      selected: [],
      leftSelected: [],
      rightSelected: []
    }
  },
  computed: {
    leftButtonDisable () {
      return this.leftSelected.length === 0
    },
    rightButtonDisable () {
      return this.rightSelected.length === 0
    }
  },
  methods: {
    selectionChangeLeft (val) {
      this.leftSelected = val
    },
    selectionChangeRight (val) {
      this.rightSelected = val
    },
    // 点击选择变量
    selectVariable () {
      // 右边设值
      this.leftSelected.forEach((item) => this.selected.push(item))
      // 左边删除变量
      this.all = this.all.filter((item) => {
        return this.selected.indexOf(item) === -1
      })
      this.leftSelected = []
      // 重排
      this.selected.sort((a, b) => {
        return a.id - b.id
      })
    },
    // 点击舍弃变量
    abandonVariable () {
      // 右边删除该元素，左边添加此元素
      this.rightSelected.forEach((item) => this.all.push(item))
      this.selected = this.selected.filter((item) => {
        return this.rightSelected.indexOf(item) === -1
      })
      this.rightSelected = []
      this.all.sort((a, b) => {
        return a.id - b.id
      })
    }
  }
}
</script>

<style scoped>
  .button-group .button-select{
      display: block;
      margin: 10px;
  }
  .button-group{
     width: 50px;
     margin-top: 60%;
  }
  .total-variable{
    height: 300px;
    overflow-y: scroll;
  }
  .selected-variable{
    height: 300px;

    overflow-y: scroll;
  }
  .button-col{
    margin-top: 5%;
    padding-left: 10px ;
  }

</style>
