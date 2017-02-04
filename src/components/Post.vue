<template>
  <div class="post">
      <div class="card">
        <div class="card-block">
          <label>Post ID:</label>
          <p class="text-justify">{{postsDetails.id}}</p>
        </div>
        <div class="card-block text-nowrap">
          <label>By:</label>
          <p class="text-justify">
            <strong>{{userDetails.name}}</strong> from company <strong>{{userDetails.company.name}}</strong>
          </p>
        </div>
        <div class="card-block">
          <label>Post Title:</label>
          <p class="text-justify">{{postsDetails.title}}</p>
        </div>
        <div class="card-block">
          <label>Post Body:</label>
          <p class="text-justify">{{postsDetails.body}}</p>
        </div>
        <a class="btn btn-info" href="/">back to posts</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      postsDetails: {},
      userDetails: {
        company: {}
      }
    }
  },
  methods: {
    getPostDetails () {
      this.$http.get(this.$root.API_PREFIX + '/posts/' + this.$route.params.id).then(response => {
        // get body data
        this.postsDetails = response.body
        return this.postsDetails
      })
      .then(function (postData) {
        this.$http.get(this.$root.API_PREFIX + '/users/' + postData.userId).then(response => {
          this.userDetails = response.body
        })
      })
    }
  },
  mounted: function () {
    this.getPostDetails()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
