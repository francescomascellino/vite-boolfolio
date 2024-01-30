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

        <!-- VIEW -->
        <router-view v-slot="{ Component }">

            <transition name="scale-slide">
                <component :is="Component" />
            </transition>

        </router-view>

    </main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

.scale-slide-enter-active,
.scale-slide-leave-active {
    position: absolute;
    transition: all 0.5s ease;
}

// INITIAL ENTER ANIMATION STATE
.scale-slide-enter-from {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.40);
    background-color: $darkBackground;
    left: -100%;
}

// FINAL ENTER ANIMATION STATE
.scale-slide-enter-to {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.40);
    background-color: $darkBackground;
    left: 0%;
}

// INITIAL EXIT ANIMATION STATE
.scale-slide-leave-from {
    transform: scale(1);
}

// FINAL EXIT ANIMATION STATE
.scale-slide-leave-to {
    filter: blur(2px);
    transform: scale(0.8);
}
</style>
