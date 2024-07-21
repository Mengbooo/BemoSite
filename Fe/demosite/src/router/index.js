import { createRouter, createWebHistory } from 'vue-router'
import mainbody from '../views/mainBody.vue'
import demos from '../views/demos.vue'
import design from '../views/design.vue'
import ulink from '../views/ulink.vue'
import developing from '../views/developing.vue'

const routes = [
    {
        path: '/',
        name: 'Mainbody',
        component: mainbody
    },
    {
        path: '/demos',
        name: 'Demos',
        component: demos
    },
    {
        path: '/design',
        name: 'Design',
        component: design
    },
    {
        path: '/ulink',
        name: 'ULink',
        component: ulink
    },
    {
        path: '/developing',
        name: 'Developing',
        component: developing
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router