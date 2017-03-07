<template>
  <el-row>
    <el-col :span="24">
      <el-col :xs="4" :sm="6" :md="4" :lg="4" class="logo">
        <div class="grid-content bg-purple">XX-INDEX</div>
      </el-col>
      <el-col :xs="16" :sm="14" :md="14" :lg="16" class="proj">
        <div class="grid-content bg-purple-light">此处是项目标签处</div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="6" :lg="4" class="user">
        <ul>
          <el-col :xs="6" :sm="6" :md="6" :lg="6">
            <li><i class="el-icon-search"></i></li>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6">
            <li><i class="el-icon-message"></i></li>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <li>
              <div class="user_pic"></div>
              <span>{{ sysUserName }}</span>
            </li>
          </el-col>
        </ul>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Header',
    props: ['sysUserName'],
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }

</script>

<style>
  .el-row {
    background: #2b3643;
    color: #fff;
    height: 50px;
  }

  .logo, .proj {
    line-height: 50px;
  }

  .logo div {
    padding-left: 10px;
    font-size: 32px;
  }

  .user {
    overflow: hidden;
  }

  .user ul {
    /*display: flex;*/
    margin: 0;
    padding: 0;
    height: 50px;
    overflow: hidden;
    text-align: center;
    /*justify-content: space-around;*/
    /*align-items: center;*/
  }

  .user ul li {
    margin: 0;
    list-style: none;
    cursor: pointer;
  }

  .user ul li i {
    margin: 10px 0;
    font-size: 30px;
  }

  .user_pic {
    display: inline-block;
    border-radius: 20px;
    margin: 5px 5px 0 0;
    background: #fff;
    width: 40px;
    height: 40px;
  }

  .user ul li:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
