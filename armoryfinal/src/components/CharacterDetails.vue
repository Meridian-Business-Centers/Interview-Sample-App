<template>
  <div class="characterdetails">
  	<div class="container">
  		<div v-if="showProfile == true">
  		<hr>
    	<ul class="media-list" v-if="statusCode == 200">
    	<li class="media">
    		<div class = "media-left">
    		<img src="media-object" v-bind:src="charData.thumbnail">
			</div>
			<div class = "media-body">
			<h4 class = "media-heading">
				<p><b>{{charData.name}}</b> of <b>{{charData.realm}}</b> <br>
				Level: {{charData.level}}<br> 
				{{charData.race}} {{charData.class}}<br>
				of the {{charData.faction}}! </p>
			</h4>
			</div>
    	</li>
    	</ul>
    	</div>
    	<div class = "badNews" v-else-if="showProfile == false">
    	<hr>
    	<h2>:( No match!</h2>
    	</div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'characterdetails',
  props: ['charUrl'], 
  data(){
  	return{
  		charData: {},
  		statusCode: null,
  		showProfile: null
  	}
  },
  methods: {
  	getCharacterResponse: function(urlForCharacterProfile){
   		this.$http.get(urlForCharacterProfile).then(response => {
   			this.statusCode = response.status;
   			if (this.statusCode == 200){
   				this.charData = response.body;
   				this.showProfile = true;
   			}
   		}, error => {
   			this.statusCode = error.status;
   			this.showProfile = false;
   		});
  	}
  },
  watch: {
  	 charUrl: function (val){
  	 	console.log('url is chaning to ' + val);
  	 	if (val !== '' && val !== null){
  	 	this.getCharacterResponse(val);
  	 	} else{
  	 		this.showProfile = null;
  	 	}
  	 }

  }
}
</script>


<style scoped>
.badNews h2 {
	font-size: 25px;
}
</style>
