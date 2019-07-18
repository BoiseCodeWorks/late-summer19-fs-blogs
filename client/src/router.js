import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './views/Blogs.vue'
import Blog from './views/Blog.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blogs/:blogId',
      name: 'Blog',
      component: Blog
    },
    {
      path: '*',
      redirect: '/blogs'
    }
  ]
})
