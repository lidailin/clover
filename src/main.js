import Vue from 'vue'
import Router from 'vue-router'
import Device from './libs/device'
import Home from './Home'
import Index from './Index'
import Demo from './demos/Demo'
import Button from './demos/Button'
import Icon from './demos/Icon'
import Navbar from './demos/Navbar'

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
  '/index': {
    component: Index
  },
  '/component/button': {
    component: Button
  },
  '/component/navbar': {
    component: Navbar
  },
  '/component/icon': {
    component: Icon
  }
})

Device()

router.start(App, '#app')
