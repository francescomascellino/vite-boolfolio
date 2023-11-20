import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue'
import ContactsView from './views/ContactsView.vue'

const routes = [

    { path: '/', component: AboutView },
    { path: '/projects', component: ProjectsView },
    { path: '/contacts', component: ContactsView },

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
