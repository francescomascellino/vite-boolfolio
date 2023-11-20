<script>

import ProjectsPagination from '../components/ProjectsPagination.vue'

import ProjectCard from '../components/ProjectCard.vue'

// import Navbar from '../components/Navbar.vue'

import { store } from '../store'

// import axios from 'axios'

export default {
    name: "ProjectsView",

    components: {
        ProjectsPagination,
        ProjectCard,
        // Navbar,
    },

    data() {

        return {

            store,

        }

    },

    methods: {

    },

    created() {
        // this.store.getProjects()
    },

    mounted() {

        this.store.getProjects()

    }

}

</script>

<template>
    <section id="projects" class="min-vh-100 pt-5">

        <div class="container">

            <h1 class="text-light text-center my-2">Some of my Projects</h1>

            <ProjectsPagination />

            <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">

                <ProjectCard :project="project" :baseUrl="store.baseUrl" v-for="project in store.projects" />

            </div>

            <ProjectsPagination />

        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
</style>
