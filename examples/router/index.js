import Vue from 'vue'
import VueRouter from 'vue-router'

//组件
import component from './component'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/layout/layout'),
        redirect: '/component/installation/',
        children: [
            ...component
        ]
    },
    {
        path: '*',
        redirect: { path: '/' },
    },
]

const router = new VueRouter({
    //   mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
