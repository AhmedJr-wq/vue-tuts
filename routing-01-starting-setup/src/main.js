import { createApp } from 'vue';

import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import NotFound from "@/components/nav/NotFound.vue";
import TeamsFooter from "@/components/teams/TeamsFooter.vue";
import UsersFooter from "@/components/users/UsersFooter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers }
            ]
        },
        {
            path: '/users',
            components: { default: UsersList, footer:  UsersFooter },
        },
        // { path: '/teams/:teamId', component: TeamMembers}, nested routes in /teams
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, left: 0 };
        }
    }
})

const app = createApp(App)

app.use(router)

app.mount('#app');
