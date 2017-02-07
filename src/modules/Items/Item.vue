<template>
  <div class="inner container col-sm-6 col-md-4">
    <div class="panel-primary">
      <div class="panel-heading">
        <h2>{{item.mast}}</h2>
        <h3 class="panel-title">{{item.sub}}</h3>
      </div>
    </div>
    <div class="card">
      <div class="card-height-indicator"></div>
      <div class="card-content panel-primary">
        <div class="panel-body">
          <div class="row">
            <p class="description">{{item.description}}</p>
          </div>
        </div>
        <div class="info-box list-group-item-success" v-show="item.url">
          <a v-bind:href="item.url" class="" target="_blank">View Online</a> <span class="glyphicon">&#xe164;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  h2{
    font-size: 2rem
  }
  a {
    color: whitesmoke !important
  }
</style>