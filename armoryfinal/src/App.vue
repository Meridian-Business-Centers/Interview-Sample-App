<template>

  <div id = "app">
   <nav class="navbar navbar-inverse navbar-static-top"> 
      <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>                        
              </button>
              <a class="navbar-brand" href="#">Character Retriever v1</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                       <li><a href="http://us.blizzard.com/en-us/">Blizzard</a></li>
                       <li><a href="https://dev.battle.net/">Battle.Net API</a></li>
                     </ul>
              </div>
   </nav>
   <div class = "container">
  <InputForm @urlConstructed="charUrl = $event"></InputForm>
  <CharacterDetails v-bind:charUrl = "charUrl"></CharacterDetails>
  </div>
  </div>
</template>

<script>
import InputForm from './components/InputForm'
import CharacterDetails from './components/CharacterDetails'



export default {
  name: 'app',
  components: {
    InputForm,
    CharacterDetails
  },
  data (){
    return {
      charUrl: ""
    }
  }
}
</script>

<style>

</style>
