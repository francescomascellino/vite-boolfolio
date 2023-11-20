<script >
import { store } from '../store';

import axios from 'axios';

export default {
    name: 'SingleProjectView',

    props: {

    },

    data() {
        return {
            store,
            project: null,
        }

    },

    methods: {

    },
    mounted() {
        // `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`
        axios.get(this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`)
            .then(response => {
                console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                console.log('SINGLE PROJECT:', response.data.result);
                this.project = response.data.result;
            }).catch(err => {
                console.error(err);
            })
    },

}

</script>

<template>
    <section id="" class="vh-100 pt-5">
        <div class="container h-100">

            <div class="">

                <div class="col" v-if="project">
                    <h1 class="text-light text-center">{{ project.title }}</h1>
                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped></style>