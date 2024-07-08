import { createRouter, createWebHistory } from 'vue-router'
import mainbody from '../views/mainBody.vue'

const routes = [
    {
        path: '/',
        name: 'Mainbody',
        component: mainbody
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router