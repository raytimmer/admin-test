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
            alert('submit!')
            var loginParams = {user_name: this.ruleForm.account, password: this.ruleForm.checkPass}
            requestLogin(loginParams)
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
    /* data () {
     return {
     logining: false,
     ruleForm2: {
     account: 'admin',
     checkPass: '123456'
     },
     rules2: {
     account: [
     { required: true, message: '请输入账号', trigger: 'blur' }
     // { validator: validaePass }
     ],
     checkPass: [
     { required: true, message: '请输入密码', trigger: 'blur' }
     // { validator: validaePass2 }
     ]
     },
     checked: true
     }
     },
     methods: {
     handleReset2 () {
     this.$refs.ruleForm2.resetFields()
     },
     handleSubmit2 (ev) {
     // var _this = this
     this.$refs.ruleForm2.validate((valid) => {
     if (valid) {
     // _this.$router.replace('/table');
     this.logining = true
     // NProgress.start()
     // var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass }
     /!* requestLogin(loginParams).then(data => {
     this.logining = false
     NProgress.done()
     let { msg, code, user } = data;
     if (code !== 200) {
     this.$notify({
     title: '错误',
     message: msg,
     type: 'error'
     })
     } else {
     sessionStorage.setItem('user', JSON.stringify(user))
     this.$router.push({ path: '/table' })
     }
     }) *!/
     } else {
     console.log('error submit!!')
     return false
     }
     })
     }
     } */
  }
</script>

<style>
  #login {
    position: absolute;
    width: 100%;
    height: 100%;
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
