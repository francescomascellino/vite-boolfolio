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
    <section id="about" class="vh-100">
        <div class="container h-100">

            <!-- WELCOME -->
            <div class="row h-50 align-items-center grow-left">

                <div class="col">
                    <h1 class="text-light text-center">Hi there 👋</h1>
                    <h2 class="text-light text-center">My name is Francesco and I am a Full Stack Web Developing Student
                    </h2>
                </div>



            </div>

            <!-- ABOUT -->
            <div class="row justify-content-end h-50 align-items-center">

                <!-- LATEST PROJECTS -->
                <div class="col col-md-6 text-light grow-left" v-if="store.latestProjects">
                    <h3>📂 Latest Projects</h3>

                    <div class="container-fluid">
                        <div v-for="project in this.store.latestProjects" :key="project.id"
                            class="col d-flex align-items-center border rounded-3 my-2">
                            <div class="me-2">
                                <img :src="this.store.baseUrl + 'storage/' + project.thumb" :alt="project.title"
                                    style="height: 100px;" class="border border-end-1 border-start-0 rounded-start-3">
                            </div>
                            <div>
                                
                                <router-link :to="{
                                    name: 'project',
                                    params: { slug: project.slug }
                                }"> {{ project.title }}
                                </router-link>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- TECH STACK -->
                <div class="col col-md-6 text-light grow-right">

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

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/About.scss';
</style>