import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage.vue'
import BookAdd from '../views/BookAdd.vue'
import PageThree from '../views/PageThree.vue'
import PageFour from '../views/PageFour.vue'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "图书管理",
    component: Index,
    redirect: "/BookManage",
    children:[
      {
        path: "/pageOne",
        name: "图书查询",
        component: BookManage
      },
      {
        path: "/BookAdd",
        name: "添加图书",
        component: BookAdd
      },
    ]
  },
  {
    path: "/",
    name: "导航二",
    component: Index,
    children:[
      {
        path: "/pageThree",
        name: "页面三",
        component: PageThree
      },
      {
        path: "/pageFour",
        name: "页面四",
        component: PageFour
      },
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
