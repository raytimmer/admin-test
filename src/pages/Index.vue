<template>
  <div id="index">
    <pageHeader></pageHeader>
    <span>我是index页面</span>
  </div>
</template>

<script>
  import pageHeader from '../components/page-header.vue'
export default {
  name: 'Index',
  data () {
    // console.log(sessionStorage.getItem('user'))
    return {}
  },
  components: {
    pageHeader
  }
}
</script>

<style>

</style>
