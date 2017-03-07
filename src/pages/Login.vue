<template>
  <div id="login">
    <el-form class="card-box loginform" :model="ruleForm" :rules="rules" ref="ruleForm">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" auto-complete="off" placeholder="账号" v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" auto-complete="off" placeholder="密码" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-checkbox checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm('ruleForm')">登录</el-button>
        <!--<el-button @click.native.prevent="">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {requestLogin} from '../api/api.js'
  export default {
    data () {
      return {
        ruleForm: {
          account: '',
          checkPass: ''
        },
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!')
            var loginParams = {user_name: this.ruleForm.account, password: this.ruleForm.checkPass}
            requestLogin(loginParams).then(datap => {
              let {success, data} = datap
              var user = data
              if (success === 1) {
                sessionStorage.setItem('user', JSON.stringify(user))
                this.$router.push('/index')
              } else {
                this.$notify({
                  title: '错误',
                  message: datap.error.message,
                  type: 'error'
                })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  #login {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background: url("../assets/login_bg.png");
  }
  .card-box {
    padding: 20px;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    width: 400px;
    border: 2px solid #8492A6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>
