import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import ProfilePage from '../components/pages/ProfilePage.vue';
import ProjectsPage from '../components/pages/ProjectsPage.vue';
import ShowProjectPage from '../components/pages/ShowProjectPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/profile', component: ProfilePage },
        { path: '/projects/:slug', name: 'show-project', component: ShowProjectPage },
        { path: '/projects', component: ProjectsPage },
        { path: '/:pathMatch(.*)*', component: NotFoundPage },
    ]
})
