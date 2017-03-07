<template>
  <div id="index">
    <pageHeader :sysUserName="sysUserName"></pageHeader>
    <sideBar></sideBar>
  </div>
</template>

<script>
  import pageHeader from '../components/page-header.vue'
  import sideBar from '../components/side-bar.vue'
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
      pageHeader,
      sideBar
    }
}
</script>

<style>

</style>
