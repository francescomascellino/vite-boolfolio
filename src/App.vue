<script>
import Navbar from './components/Navbar.vue'

import { store } from './store'

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
