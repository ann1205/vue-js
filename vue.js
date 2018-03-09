var app = new Vue({
  el:'#app',
  data:{
    message: 'Post Trucks'
  }
})
var app = new Vue({
  el: '#app3',
  methods: {
    addNew: function (){
      var newRow = document.getElementById('table');
      var newCallControll = document.createElement('call-controll');
      newRow.appendChild('call-controll');
    }
  }

})