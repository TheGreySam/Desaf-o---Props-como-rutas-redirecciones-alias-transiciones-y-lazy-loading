import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import SobreMi from './views/SobreMi'
import Contacto from './views/Contacto'
import Post from './views/Post'
import Articulo from './views/Articulo'
import NotFound from './views/NotFound'
import Simple from './views/administrador/Simple'
import Avanzado from './views/administrador/Avanzado'

const Lazyloading = () => import('./components/Lazyloading')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'inicio',
        component: Inicio,
        children: [
            {
            path: '',
            components: {
                lazyloading: Lazyloading
            },
        },
    
    ],
    },
    {
        path: '/sobremi',
        name: 'sobremi',
        component: SobreMi
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto
    },
    {
        path: '/post',
        name: 'post',
        component: Post,
        children: [{
            path: ':articulo',
            component: Articulo,
        }]
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/administrador/simple',
        name: 'simple',
        component: Simple,

    },
    {
        path: '/administrador/avanzado',
        name: 'avanzado',
        component: Avanzado,

    }
]
})