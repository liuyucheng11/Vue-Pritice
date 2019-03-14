<template>
  <div>
    <el-row :gutter="2">
      <el-col span="2">
        <el-button type="primary" @click="dialogVisible = true">新建</el-button>
      </el-col>
      <el-col span="2">
        <el-button type="primary">删除</el-button>
      </el-col>
      <el-col span="10">
        <el-input placeholder="请输入" style="width: 80%" suffix-icon="el-icon-search">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData.data" highlight-current-row>
        <el-table-column label="id" v-if="showId"></el-table-column>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="表名" prop="name">
          <template slot-scope="scope">
              <p class="table-name" @click.prevent="showTableDetail(scope.row.id)">{{scope.row.name}}</p>
          </template>
        </el-table-column>
        <el-table-column label="业务实体代码" prop="businessCode"></el-table-column>
        <el-table-column label="创建时间" prop="createTime"></el-table-column>
      </el-table>
    </el-row>
    <el-pager></el-pager>
    <el-dialog
      title="新建表"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <div class="dialog-main">
        <div class="business-code">
          <span>业务实体代码:</span>
          <el-input style="width: 30%" placeholder="输入业务实体代码" size="small"></el-input>
        </div>
        <div class="sql-code">
          <span>SQL:</span>
          <el-input type="textarea" placeholder="请输入建表语句"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">保存</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>
  </span>
    </el-dialog>

    <el-dialog
      title="查看表详情"
      :visible.sync="showVisible"
      width="50%"
      :before-close="handleClose">
      <div class="dialog-main">
        <div class="business-code">
          <span>业务实体代码:</span>
          <el-input style="width: 30%" v-model="tableName" :disabled="true" placeholder="输入业务实体代码" size="small"></el-input>
        </div>
        <div class="sql-code">
          <span>SQL:</span>
          <el-input type="textarea"   :rows="8" v-model="sqlContent" :disabled="true" placeholder="请输入建表语句"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="showVisible = false">取 消</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
import ElPager from 'element-ui/packages/pagination/src/pager'

export default {
  name: 'TableStruct',
  showId: false,
  components: {ElPager},
  data () {
    return {
      tableData: {
        data: [{
          id: 1,
          name: 'table_name_2',
          sqlContent: 'create table sys_table_structure\n' +
            '(\n' +
            '   id                   bigint not null AUTO_INCREMENT comment \'\',\n' +
            '   name                 varchar(50) comment \'表名\',\n' +
            '   business_code        varchar(50) comment \'业务代码\',\n' +
            '   sql_content            text comment \'sql\',\n' +
            '   create_emp           bigint comment \'创建人id\',\n' +
            '   create_time          datetime comment \'创建时间\',\n' +
            '   modify_emp           bigint comment \'修改人id\',\n' +
            '   modify_time          datetime comment \'修改人\',\n' +
            '   primary key (id)\n' +
            ') ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT=\'表结构\';\n',
          businessCode: 'employee2',
          createTime: '2019-03-23 03:22:23'
        },
        {
          id: 2,
          name: 'table_name_2',
          sqlContent: 'create table sys_template_group\n' +
            '(\n' +
            '   id                   bigint not null AUTO_INCREMENT comment \'主键\',\n' +
            '   name                 varchar(50) comment \'名称\',\n' +
            '   description          varchar(500) comment \'描述\',\n' +
            '   status               tinyint unsigned comment \'状态，1有效，2无效\',\n' +
            '   create_emp           bigint comment \'创建人id\',\n' +
            '   create_time          datetime comment \'创建时间\',\n' +
            '   modify_emp           bigint comment \'修改人id\',\n' +
            '   modify_time          datetime comment \'修改人\',\n' +
            '   primary key (id)\n' +
            ') ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT=\'模板分组\';',
          businessCode: 'employee',
          createTime: '2019-03-23 03:22:23'
        },
        {
          id: 3,
          name: 'table_name_3',
          businessCode: 'employee',
          sqlContent: 'create table sys_template_variable\n' +
            '(\n' +
            '   id                   bigint not null AUTO_INCREMENT comment \'主键\',\n' +
            '   template_id          bigint comment \'模板id\',\n' +
            '   variable_id          bigint comment \'模板变量\',\n' +
            '   primary key (id)\n' +
            ') ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT=\'模板关联变量\';',
          createTime: '2019-03-23 03:22:23'
        },
        {
          id: 4,
          name: 'table_name_4',
          businessCode: 'employee',
          sqlContent: 'create table sys_template_variable\n' +
            '(\n' +
            '   id                   bigint not null AUTO_INCREMENT comment \'主键\',\n' +
            '   template_id          bigint comment \'模板id\',\n' +
            '   variable_id          bigint comment \'模板变量\',\n' +
            '   primary key (id)\n' +
            ') ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT=\'模板关联变量\';',
          createTime: '2019-03-23 03:22:23'
        }]
      },
      dialogVisible: false,
      showVisible: false,
      sqlContent: '',
      tableName: ''

    }
  },
  methods: {
    showTableDetail (id) {
      console.log(id)
      this.showVisible = true
      let var1 = this.tableData.data.find((item) => {
        return item.id === id
      })
      this.tableName = var1.name
      this.sqlContent = var1.sqlContent
    }
  }
}
</script>
<style lang="scss" scoped>
  .business-code {
    display: flex;
    padding: 10px;

    span {
      margin-top: 5px;
    }
  }

  .sql-code {
    display: flex;
    margin: 10px;
    padding: 10px;
  }
  .table-name{
     color: #41b8ff;
    cursor: pointer;
  }

</style>
