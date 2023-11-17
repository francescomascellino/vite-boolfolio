<script>
import ProjectCard from './components/ProjectCard.vue'

import { store } from './store'

import axios from 'axios'

export default {
    name: "App",

    components: {
        ProjectCard,
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

        navigate(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.projects = response.data.result.data;
                    this.store.queryData = response.data.result;
                    this.store.queryLinks = response.data.result.links;
                }).catch(err => {
                    console.error(err);
                })
            this.currentPage = this.queryData.current_page;
        }

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
    <!-- CURRENT {{ this.queryData.current_page }} <br>
    prev {{ this.queryData.prev_page_url }} <br>
    NEXT {{ this.queryData.next_page_url }} <br>
    {{ this.queryLinks[this.queryData.current_page].url }} <br> -->

    <div class="container">

        <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-3">

            <ProjectCard :project="project" :baseUrl=" store.baseUrl" v-for="project in store.projects" />

        </div>

        <h3>My TEST PAGINATION</h3>
        <nav aria-label="Page navigation" v-if="store.queryData != null">

            <ul class="pagination">
                <li class="page-item"
                    :class="(link.label == store.queryData.current_page ? 'active' : ''), (link.url == null ? 'disabled' : '')"
                    aria-current="page" v-for="link in store.queryLinks" :key="link.id">
                    <a class="page-link" href="#" @click="navigate(link.url)"><span> {{ link.label }} </span></a>
                </li>

            </ul>
        </nav>

        <h3>PAGINATION</h3>
        <nav aria-label="Page navigation" v-if="store.queryData != null">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" :class="(store.queryData.prev_page_url == null ? 'disabled' : '')" href="#"
                        @click="navigate(store.queryData.prev_page_url)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" :class="(store.queryData.current_page)" aria-current="page"><a class="page-link"
                        href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" :class="(store.queryData.next_page_url == null ? 'disabled' : '')" href="#"
                        @click="navigate(store.queryData.next_page_url)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style></style>
