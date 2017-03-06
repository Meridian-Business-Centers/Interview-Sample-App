<template>
  <div class="inputform">
  <div class="jumbotron">
    <h1><span></span>Search Criteria</h1>
    <hr>
    <form class="form-horizontal">
        <div class="form-group">
        <label class="control-label col-sm-2">US Realm</label>
        <div class="col-sm-10">
        <select class="form-control" v-on:change="realmChanged" required>
        <option v-bind:value="realm.slug" v-for="realm in realms">{{realm.name}}</option></select>
        </div>
        </div>

         <div class="form-group">
           <label class="control-label col-sm-2">Character Name</label>
           <div class="col-sm-10">          
           <input type="text" class="form-control" v-model="charname" required>
           </div>
         </div>

         <div class="form-group">        
           <div class="col-sm-offset-2 col-sm-10">
           <button type="submit" class="btn btn-default" @click="submitCharInfo">Search</button>
           <input class="btn btn-danger" type="reset" value="Reset" v-on:click="resetData">
          </div>
        </div>
    </form>
    </div>
    
</template>

<script>
export default {
  name: 'inputform',
  data(){
    return {
      realms: [],
      realm: null,
      charname: null,
      charUrl: null
    }
  },
  methods: {
    realmChanged: function(e){
      this.realm=e.target.value;
     // this.$emit('realmChanged', e.target.value);
    },
    resetData: function(){ //resets realm to first index of the array and character name to null
      this.realm = this.realms[0].slug;
      this.charname = null;
      this.charUrl = null;
      this.$emit('urlConstructed', this.charUrl);
    },
    submitCharInfo: function(e){ //after a few checks, will make the URL available to App.vue so CharacterDetails can pick up the change
      if (this.charname !== null && this.charname !== '' && this.realm !== null && this.realm !== ''){
        e.preventDefault(); //stops page from refreshing itself
        this.charUrl = 'http://localhost:5000/api/wow/' + this.charname + '/' + this.realm;
        this.$emit('urlConstructed', this.charUrl); //makes the URL available for the parent vue
      }else{
        //console.log('no char name yet');
      }
    }
  },
    created: function(){ //gets all the realms that will populate the dropdown in the UI
      this.$http.get('http://localhost:5000/api/wow/realms')
    .then(response => {
      this.realms = response.body; //puts the array of objects returning into the realms array
      this.realm = this.realms[0].slug; //sets default realm to the first in the array. In case the user were to not change to another realm.
    })
  }
}

</script>


<style scoped>
h1 {
  font-size: 42px;
}
</style>




