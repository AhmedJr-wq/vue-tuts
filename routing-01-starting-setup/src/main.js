import { createApp } from 'vue';

import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import NotFound from "@/components/nav/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            component: TeamsList,
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers }
            ]
        },
        { path: '/users', component: UsersList},
        // { path: '/teams/:teamId', component: TeamMembers}, nested routes in /teams
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active'
})

const app = createApp(App)

app.use(router)

app.mount('#app');
