<script>
import Navbar from './components/Navbar.vue'

import About from './components/About.vue'

import ProjectsPagination from './components/ProjectsPagination.vue'

import ProjectCard from './components/ProjectCard.vue'



import { store } from './store'

import axios from 'axios'

export default {
    name: "App",

    components: {
        About,
        Navbar,
        ProjectsPagination,
        ProjectCard,
        // Contacts,
    },

    data() {

        return {

            store,

            /*          
            baseUrl: 'http://127.0.0.1:8000/', // URL BASE DI laravel_api
            portfolioApi: 'api/projects',
            pageQuery: '?page=',
            projects: [],
            currentPage: 1,
            queryData: null,
            queryLinks: null, */

        }

    },

    methods: {

        /* navigate(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.projects = response.data.result.data;
                    this.store.queryData = response.data.result;
                    this.store.queryLinks = response.data.result.links;
                }).catch(err => {
                    console.error(err);
                })
            this.store.currentPage = this.store.queryData.current_page;
        }, */

    },

    created() {
        // CHIAMATA AXIOS QUANDO App E' MOUNTED
        /*         axios.get(this.baseUrl + this.portfolioApi,
                    {
                        params: {
                            page: this.currentPage
                        }
                    })
                    .then(response => {
                        console.log(response);
                        this.projects = response.data.result.data;
                        this.queryData = response.data.result;
                        this.queryLinks = response.data.result.links;
                    }).catch(err => {
                        console.error(err);
                    }) */

        this.store.getProjects()
    }

}

</script>

<template>
    <!-- DEBUG -->
    <!-- CURRENT {{ this.store.queryData.current_page }} <br>
    prev {{ this.store.queryData.prev_page_url }} <br>
    NEXT {{ this.store.queryData.next_page_url }} <br>
    {{ this.store.queryLinks[this.queryData.current_page].url }} <br> -->

    <Navbar />

    <section id="about" class="vh-100">

        <About />

    </section>

    <section id="projects" class="min-vh-100">

        <div class="container">

            <h1 class="text-light text-center my-2">Some of my Projects</h1>

            <ProjectsPagination />

            <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">

                <ProjectCard :project="project" :baseUrl="store.baseUrl" v-for="project in store.projects" />

            </div>

            <nav aria-label="Page navigation" class="my-4" v-if="store.queryData != null">

                <ul class="pagination">
                    <li class="page-item shadow-lg"
                        :class="(link.label == store.queryData.current_page ? 'active' : ''), (link.url == null ? 'disabled' : '')"
                        aria-current="page" v-for="link in store.queryLinks" :key="link.id">
                        <a class="page-link border border-black" href="#projects" @click="navigate(link.url)"
                            v-html="link.label"></a>
                    </li>
                </ul>

            </nav>

        </div>
    </section>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

.page-item {

    a {
        background: $navbarBackround !important;
        color: whitesmoke !important;
    }

}

li.active {

    a {
        background: $navLinkHover !important;
    }

}

li.disabled {

    a {
        background: $projectCardOverlay !important;
        color: gray !important;
    }

}
</style>
