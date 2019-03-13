<template>
  <div>
  <el-row :gutter="10">
    <el-col :span="4">
      <el-button type="primary" size="large">新建</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="default" size="large">取消</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="tableData" border="1" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
