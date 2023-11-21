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
        this.store.getTechnologies()

    }

}

</script>

<template>
    <section id="projects" class="min-vh-100 pt-5">

        <div class="container">

            <h1 class="text-light text-center my-2">Some of my Projects</h1>

            <!-- TYPE  DROPDOWNFILTER -->
            <div class="dropdown open d-inline-block mt-4">
                <button class="btn dropdown-toggle border border-black shadow" type="button" id="typefilter"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Type
                </button>
                <ul class="dropdown-menu border border-black shadow">

                    <router-link class="dropdown-item" v-for="type in this.store.types" :to="{
                        name: 'type',
                        params: { slug: type.slug }
                    }">
                        {{ type.name }}
                    </router-link>

                </ul>
            </div>

            <!-- TECHNOLOGIES DROPWOWN FILTER -->
            <div class="dropdown open d-inline-block ms-3">
                <button class="btn dropdown-toggle border border-black shadow" type="button" id="typefilter"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Technologies
                </button>
                <ul class="dropdown-menu border border-black shadow">

                    <router-link class="dropdown-item" :to="{
                        name: 'technology',
                        params: { slug: technology.slug }
                    }" v-for="technology in this.store.technologies">
                        {{ technology.name }}
                    </router-link>

                </ul>
            </div>

            <!-- PAGINATION -->
            <ProjectsPagination v-if="store.queryData != null" />

            <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">

                <!-- CARDS -->
                <ProjectCard :project="project" :baseUrl="store.baseUrl" v-for="project in store.projects" />

            </div>

            <!-- PAGINATION -->
            <ProjectsPagination v-if="store.queryData != null" />

        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
</style>
