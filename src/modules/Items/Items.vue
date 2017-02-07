<template>
  <div id="container" class="outer container">
    <h1>Items</h1>
    <br />
    <app-item v-for="item in items" v-bind:item="item"></app-item>
  </div>
</template>

<script>
  import Item from './Item.vue'
  import {items} from '../../store'

  export default {
    components: {
      appItem: Item
    },
    computed: items.computed,
    created () {
      this.$store.dispatch('INITIALIZE', 'items')
    }
  }
</script>