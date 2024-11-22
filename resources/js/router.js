import * as VueRouter from "vue-router";


const route = VueRouter.createRouter ({

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
       /* {
            path: '/users/personal',
            component: () => import('./components/User/PersonalComponent.vue'),
            name: 'user.personal'
        },*/
       /* {
            path: '/:pathMatch(.*)*',
            component: () => import('./components/User/404Component.vue'),
            name: '404'
        }*/

    ],
})

export default route;
