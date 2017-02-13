const pastT = new Vue({
  el: '#films',
  data: {
    allFilms: [],
    selectedFilm: '',
    test: '',
  },
  created: function () {
    this.gettingFilms()
  },
  methods: {
    gettingFilms() {
      this.$http.get('https://swapi.co/api/films')
      .then(function(res){
        let tit = res.body.results;
        tit.map( item => {
          this.allFilms.push(item.title);
        })
      }, function(err){
        throw err
      })
    },
    showMore(e) {
      this.selectedFilm = e.target.innerText;
      const foo = e.target.innerText
      let boo = this
      $.get(`https://swapi.co/api/films/?search=${foo}`)
        .then(function(res){
          let repl = res.results[0]
          boo.test = repl
        }, function(err){
          throw err
        })
    }
  },
  computed: {

  },
  watch: {

  }
})
