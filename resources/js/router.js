import * as VueRouter from "vue-router";


const router = VueRouter.createRouter ({

    history: VueRouter.createWebHistory('/'),
    routes: [
        {
            path: '/get',
            component: () => import('./components/Get.vue'),
            name: 'get.index'
        },
        {
            path: '/users/login',
            component: () => import('./components/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/users/register',
            component: () => import('./components/Register.vue'),
            name: 'user.register'
        },
        {
            path: '/users/personal',
            component: () => import('./components/Personal.vue'),
            name: 'user.personal'
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./components/404.vue'),
            name: '404'
        }

    ],
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');

    if(!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.register' && token) {
        return next({
            name: 'user.personal'
        })
    }
    next()
})

export default router;
