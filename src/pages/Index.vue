<template>
  <div id="index">
    <pageHeader :sysUserName="sysUserName"></pageHeader>
    <span>我是index页面</span>
  </div>
</template>

<script>
  import pageHeader from '../components/page-header.vue'
export default {
  data () {
    var user = JSON.parse(sessionStorage.getItem('user'))
    var sysUserName = user.user_name
    var cookie = {
      sysUserName: user.user_name,
      sysUserAvatar: ''
    }
    return {
      cookie,
      sysUserName
    }
    // console.log(sysUserName)
  },
  components: {
    pageHeader
  }
}
</script>

<style>

</style>
