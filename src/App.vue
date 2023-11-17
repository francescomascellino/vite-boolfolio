<script>
import ProjectCard from './components/ProjectCard.vue'

import axios from 'axios'

export default {
    name: "App",

    components: {
        ProjectCard,
    },

    data() {

        return {
            baseUrl: 'http://127.0.0.1:8000/', // URL BASE DI laravel_api
            portfolioApi: 'api/projects',
            pageQuery: '?page=',
            projects: [],
            currentPage: 1,
            queryData: null,
            queryLinks: null,

        }

    },

    methods: {

        navigate(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.result.data;
                    this.queryData = response.data.result;
                    this.queryLinks = response.data.result.links;
                }).catch(err => {
                    console.error(err);
                })
            this.currentPage = this.queryData.current_page;
        }

    },

    created() {
        // CHIAMATA AXIOS QUANDO App E' MOUNTED
        axios.get(this.baseUrl + this.portfolioApi,
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
            })
    }

}

</script>

<template>
    CURRENT {{ this.queryData.current_page }} <br>
    prev {{ this.queryData.prev_page_url }} <br>
    NEXT {{ this.queryData.next_page_url }} <br>
    {{ this.queryLinks[this.queryData.current_page].url }} <br>

    <div class="container">

        <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-3">

            <ProjectCard :project="project" :baseUrl="baseUrl" v-for="project in this.projects" />

        </div>

        <nav aria-label="Page navigation">
            <ul class="pagination    ">
                <li class="page-item">
                    <a class="page-link" :class="(this.queryData.prev_page_url == null ? 'disabled' : '')" href="#" @click="navigate(this.queryData.prev_page_url)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" :class="(this.queryData.next_page_url == null ? 'disabled' : '')" href="#" @click="navigate(this.queryData.next_page_url)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style></style>
