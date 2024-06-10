
import { createRouter, createWebHistory } from 'vue-router'
import pokemeng from '../pages/pokemeng.vue'
import card from '../pages/card.vue'
import elements from '../pages/elements.vue'
import Disco from '../pages/Disco.vue'
import mainbody from '../views/mainBody.vue'

const routes = [
    {
        path: '/',
        name: 'Mainbody',
        component: mainbody
    },
    {
        path: '/pokemeng',
        name: 'Pokemeng',
        component: pokemeng
    },
    {
        path: '/card',
        name: 'Card',
        component: card
    },
    {
        path: '/elements',
        name: 'Elements',
        component: elements
    },
    {
        path: '/Disco',
        name: 'Disco',
        component: Disco
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router