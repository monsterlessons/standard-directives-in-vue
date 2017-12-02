new Vue({
  el: '.root',
  data: {
    message: '',
    isShown: false,
    users: [
      {name: 'Alex'},
      {name: 'Jack'},
      {name: 'John'}
    ]
  },
  methods: {
    onSubmit () {
      this.isShown = !this.isShown
    }
  }
})
