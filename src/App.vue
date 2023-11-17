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
            currentPage: null,
            prevPage: null,
            nextPage: null,
            firstPage: null,
            LastPage: null,

            dati: null,

            pageLinks: null,
        }

    },

    methods: {

    },

    mounted() {
        // CHIAMATA AXIOS QUANDO App E' MOUNTED
        axios.get(this.baseUrl + this.portfolioApi)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data;
                this.dati = response.data.result;
                this.pageLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
    }

}

</script>

<template>
    <div class="container">

        <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-3">

            <ProjectCard :project="project" :baseUrl="baseUrl" v-for="project in this.projects" />

        </div>

        <nav aria-label="Page navigation">
            <ul class="pagination    ">
                <li class="page-item disabled">
                    <a class="page-link" href="" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style></style>
