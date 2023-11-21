import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import SingleTypeView from './views/SingleTypeView.vue'
import NotFound from './views/NotFound.vue'

const routes = [

    {
        path: '/',
        name: 'about',
        component: AboutView
    },

    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },

    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProjectView,
    },

    {
        path: '/type/:slug',
        name: 'type',
        component: SingleTypeView,
    },

    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },

];

// router E' UNA ISTANZA di createRouter() CHE USA LE ROTTE DICHIARATE NELLA const routes
const router = createRouter(
    {
        // HYSTORY E' UN'ISTANZA DI createWebHashHistory()
        history: createWebHashHistory(),
        routes
    }
)

// EXPORT DI router.js
export { router }
