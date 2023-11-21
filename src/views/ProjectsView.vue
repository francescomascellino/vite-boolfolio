<script>

import ProjectsPagination from '../components/ProjectsPagination.vue'

import ProjectCard from '../components/ProjectCard.vue'

import { store } from '../store'

import { Dropdown } from 'bootstrap'

export default {
    name: "ProjectsView",

    components: {
        ProjectsPagination,
        ProjectCard,
    },

    data() {

        return {

            store,

        }

    },

    mounted() {

        this.store.getProjects()
        this.store.getTypes()

    }

}

</script>

<template>
    <section id="projects" class="min-vh-100 pt-5">

        <div class="container">

            <h1 class="text-light text-center my-2">Some of my Projects</h1>

            <div class="dropdown open">
                <button class="btn btn-primary dropdown-toggle" type="button" id="typefilter" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Filter by Type
                </button>
                <ul class="dropdown-menu" style="background-color: black;">

                    <router-link class="dropdown-item" :to="{
                        name: 'type',
                        params: { slug: type.slug }
                    }" v-for="type in this.store.types">
                        {{ type.name }}
                    </router-link>

                </ul>
            </div>

            <ProjectsPagination v-if="store.queryData != null" />

            <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">

                <ProjectCard :project="project" :baseUrl="store.baseUrl" v-for="project in store.projects" />

            </div>

            <ProjectsPagination v-if="store.queryData != null" />

        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
</style>
