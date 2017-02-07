<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './modules/Header.vue'
  export default {
    mounted () {
      this.$vuetify.init()
    },
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  @import url('https://unpkg.com/vuetify/dist/vuetify.min.css');
</style>
