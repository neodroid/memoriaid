import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
  ]
})
