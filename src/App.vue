<script>
import Navbar from './components/Navbar.vue'

import { store } from './store'

// import axios from 'axios'

export default {
    name: "App",

    components: {
        Navbar,
    },

    data() {

        return {

            store,

        }

    },

    methods: {

    },

    created() {

    },

    mounted() {

    }

}

</script>

<template>
    <header>

        <Navbar />

    </header>

    <main>

        <router-view></router-view>

    </main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;
</style>
