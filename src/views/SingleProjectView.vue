<script >
import { store } from '../store';

import axios from 'axios';

export default {
    name: 'SingleProjectView',

    data() {
        return {
            store,
            project: null,
        }

    },

    methods: {

        // TRASFORMA IL PERCORSO DELL'IMMAGINE LOCALE IN UN URL
        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

    },
    mounted() {
        // `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`
        axios.get(this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`)
            .then(response => {

                console.log('AXIOS RESPONSE:', response.data.success);

                if (response.data.success) {
                    console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                    console.log('SINGLE PROJECT:', response.data.result);
                    this.project = response.data.result;
                } else {
                    console.log('SINGLE PROJECT QUERY RESULT:', response.data.result);
                    this.$router.push({ name: 'NotFound' })
                }

            }).catch(err => {
                console.error(err);
            })
    },

}

</script>

<template>
    <section :id="project.slug" class="vh-100 pt-5" v-if="project">
        <div class="container h-100">

            <div class="row row-cols-1 row-cols-md-2 align-items-center h-100">

                <!-- PREVIEW IMAGE -->
                <div class="col grow-left">
                    <img class="img-fluid object-fit-cover" style="width: 100%;"
                        :src="this.store.baseUrl + 'storage/' + project.thumb"
                        @error="$event.target.src = getPlaceholderImg('../assets/img/404.jpg')" :alt="project.title">
                </div>

                <!-- DATA -->
                <div class="col text-light grow-right">
                    <h1 class="">{{ project.title }}</h1>
                    <p class=""><strong>Description: </strong>{{ project.description }}</p>

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

                    <p v-if="project.github"><a :href="project.github" class="text-decoration-none icon-link"
                            target="blank"><i class="fa-brands fa-github"></i> View on GitHub</a></p>
                    <p v-else><i class="fa-brands fa-github"></i> No Repository Avaiable <i
                            class="fa-regular fa-face-frown"></i></p>

                    <p v-if="project.link"><a :href="project.link" class="text-decoration-none icon-link" target="blank"><i
                                class="fa-solid fa-link"></i> Visit the Website</a></p>
                    <p v-else><i class="fa-solid fa-link"></i> This Project has not been published yet <i
                            class="fa-regular fa-face-frown"></i>
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/animations.scss';
</style>