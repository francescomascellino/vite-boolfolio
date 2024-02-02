<script>
import Navbar from './components/Navbar.vue'

import { store } from './store'

export default {
    name: "App",

    components: {

        Navbar

    },

    data() {

        return {

            store

        };

    }

}

</script>

<template>
    <header>

        <Navbar />

    </header>

    <main>

        <div>
            <!-- VIEW -->
            <router-view v-slot="{ Component }">

                <transition name="scale-slide">
                    <component :is="Component" />
                </transition>

            </router-view>
        </div>

    </main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;
</style>
