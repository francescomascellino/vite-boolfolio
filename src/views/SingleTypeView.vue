<script >
import { store } from '../store';

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue'

export default {
    name: 'SingleTypeView',

    components: {

        ProjectCard

    },

    data() {
        return {

            store,
            type: null

        }

    },

    methods: {

        // TRASFORMA IL PERCORSO DELL'IMMAGINE LOCALE IN UN URL
        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        }

    },

    mounted() {

        axios.get(this.store.baseUrl + 'api/types/' + `${this.$route.params.slug}`)
            .then(response => {

                console.log('AXIOS RESPONSE:', response.data.success);

                if (response.data.success) {
                    console.log('QUERY:', this.store.baseUrl + 'api/types/' + `${this.$route.params.slug}`);
                    console.log('TYPE:', response.data.result);
                    this.type = response.data.result;
                } else {
                    console.log('SINGLE TYPE QUERY RESULT:', response.data.result);
                    this.$router.push({ name: 'NotFound' })
                }

            }).catch(err => {
                console.error(err);
            })

    },

}

</script>

<template>
    <section class="vh-100 pt-5">

        <div class="container">

            <h1 v-if="type" class="text-light text-center my-2">Filtering Projects by {{ type.name }} Type</h1>

            <router-link class="btn shadow icon-link my-4" to="/projects"><i class="fa-solid fa-rotate-left"></i>
                Back</router-link>

            <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3 justify-content-center">

                <!-- CARDS -->
                <ProjectCard v-if="type" :project="project" :baseUrl="store.baseUrl" v-for="project in type.projects" />

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>