<script >
import { store } from '../store';


export default {
    name: 'AboutView',

    props: {

    },

    data() {
        return {
            store,
        }

    },

    methods: {

    },
    mounted() {
        store.getLatest()
    },

}

</script>

<template>
    <section id="about" class="vh-100 pt-4">
        <div class="container h-100">

            <!-- WELCOME -->
            <div class="row h-25 align-items-center grow-left">

                <div class="col">
                    <h1 class="text-light text-center">Hi there 👋</h1>
                    <h2 class="text-light text-center">My name is Francesco and I am a Full Stack Web Developing Student
                    </h2>
                </div>

            </div>

            <!-- ABOUT -->
            <div class="row justify-content-end h-50 align-items-center row-cols-1 row-cols-md-2">

                <!-- TECH STACK -->
                <div class="col col-md-6 text-light grow-left">

                    <h3>💫 About Me:</h3>
                    <ul class="list-unstyled">
                        <li>🔭 I am currently studing Full-Stack web developement with Boolean Careers<br>📚 I learned <i
                                class="fa-brands fa-js" style="color: gold"></i> JS,
                            <i class="fa-brands fa-vuejs" style="color: lightgreen"></i> Vue
                            3, Vite
                            and <i class="fa-brands fa-sass" style="color: palevioletred;"></i> SASS
                        </li>
                        <li>💻 I’m currently learning <i class="fa-brands fa-php" style="color: slateblue;"></i> php, <i
                                class="fa-brands fa-laravel" style="color: tomato;"></i> Laravel and other backend
                            techologies
                        </li>
                        <li>🤝 I love to work with
                            creative minds!</li>
                        <li>🎮 Larper, rpg gamer and a bit crazy (●'◡'●)</li>
                    </ul>

                </div>

                <!-- LATEST PROJECTS -->
                <div class="col col-md-6 text-light grow-right" v-if="store.latestProjects">
                    <h3>📂 Latest Projects</h3>

                    <div class="container-fluid">

                        <!-- CARD -->
                        <router-link :to="{
                            name: 'project',
                            params: { slug: project.slug }
                        }" v-for="project in this.store.latestProjects" :key="project.id"
                            class="col d-flex align-items-center border rounded-3 my-2 shadow-lg projectCardLink">

                            <!-- THUMB -->
                            <div class="me-2">
                                <img :src="this.store.baseUrl + 'storage/' + project.thumb" :alt="project.title"
                                    style="height: 100px;" class="border border-end-1 border-start-0 rounded-start-3">
                            </div>

                            <!-- TITLE -->
                            <div>{{ project.title }}</div>

                        </router-link>

                    </div>

                </div>



            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/About.scss';
@use '../assets/scss/partials/animations.scss';
</style>