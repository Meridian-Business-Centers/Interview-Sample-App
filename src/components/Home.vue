<template>
  <div class="home">
    <div class="text-center">
      <h1>Intervie sample!</h1>
      <p class="lead">
        List all posts from dummy API
      </p>
      <table class="list-group">
          <tr class="list-group-item" v-for="item in posts" v-bind:id="item.id">
            <td class="col-10 text-left">{{item.id}}.&nbsp;{{item.title}}</td>
            <td  class="col-2">
              <a :href="'details/'+item.id" class="btn btn-info float-right" :id="item.id">more</a>
            </td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: []
    }
  },
  methods: {
    getUsers () {
      this.$http.get(this.$root.API_PREFIX + '/posts').then(response => {
        // get body data
        this.posts = response.body
      })
    }
  },
  mounted: function () {
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
