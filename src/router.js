import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'
import Simple from './components/administrador/Simple'
import Avanzado from './components/administrador/Avanzado'

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