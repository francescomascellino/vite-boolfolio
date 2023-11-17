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

<!--             <div class="col" v-for="project in projects">
                <div class="card h-100">

                    <div class="card-header" style="height: 4rem">
                        <h5>{{ project.title }}</h5>
                    </div>

                    <img class="img-fluid object-fit-cover" style="height: 300px"
                        :src="this.baseurl + 'storage/' + project.thumb" :alt="project.title">

                    <div class="card-body">
                        <p><strong>Description: </strong>{{ project.description }}</p>

                        <p><strong>Type: </strong>

                            <span v-if="project.type"> {{ project.type.name }} </span>
                            <span v-else>Uncategorized</span>
                        </p>

                        <p><strong> Technologies used: </strong></p>

                        <div class="d-flex" v-if="project.technologies.length > 0">
                            <ul class="d-flex g-2 list-unstyled" v-for="technology in project.technologies">

                                <li class="badge bg-success me-1">
                                    <i class="fa-solid fa-code"></i> {{ technology.name }}
                                </li>

                            </ul>
                        </div>

                        <div class="d-flex" v-else>
                            <ul class="d-flex gap-2 list-unstyled">

                                <li class="badge bg-secondary">
                                    <i class="fa-regular fa-file"></i> None/Others
                                </li>

                            </ul>
                        </div>

                        <p><i class="fa-brands fa-github"></i> <a :href="project.github"
                                class="text-decoration-none text-black" target="blank">{{ project.github }}</a>
                        </p>

                        <p><i class="fa-solid fa-link"></i> <a :href="project.link" class="text-decoration-none text-black"
                                target="blank">{{ project.link }}</a></p>

                    </div>

                </div>
            </div> -->
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
