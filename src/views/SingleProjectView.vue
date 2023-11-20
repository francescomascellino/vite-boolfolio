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

                if (response.data.success) {
                    console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                console.log('SINGLE PROJECT:', response.data.result);
                this.project = response.data.result;
                } else {
                    this.$router.push( { name: 'NotFound'})
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

            <div class="">

                <div class="col">
                    <h1 class="text-light text-center">{{ project.title }}</h1>
                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped></style>