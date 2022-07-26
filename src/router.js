import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import contentTodo from '@/views/contentTodo'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
        path:'/',
        component: Home
         },
         {
            path:'/todos',
            component: () => import('./views/todos.vue')
         },
         {
            path:'/todos/:id',
            component: contentTodo
         }
    ]
})