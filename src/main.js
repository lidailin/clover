import Vue from 'vue'
import Router from 'vue-router'
import Device from './libs/device'
import Home from './Home'
import Demo from './demos/Demo'
import Button from './demos/Button'
import Icon from './demos/Icon'

Vue.use(Router)
var App = Vue.extend({})
var router = new Router()

router.map({
  '/': {
    component: Demo
  },
  '/home': {
    component: Home
  },
  '/component/button': {
    component: Button
  },
  '/component/icon': {
    component: Icon
  }
})

Device()

router.start(App, '#app')
