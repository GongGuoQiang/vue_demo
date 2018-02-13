import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/good'
import Prodct from '@/components/prodct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Good',
      component: Good
  },
  {
    path: '/list:img/:id/:price',
    name: 'Prodct',
    component: Prodct
},

  ]
})
