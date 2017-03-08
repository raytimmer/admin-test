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
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
</style>
