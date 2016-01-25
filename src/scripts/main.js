var Vue = require('vue');
var Router = require('vue-router');

var App = require('./components/App.vue');
var CalculatorView = require('./components/CalculatorView.vue');

Vue.use(Router)

var router = new Router({
  hashbang: false,
  abstract: true
})

router.map({
  '/': {
    component: CalculatorView
  }
})

router.start(App, '#app')
