<script >

export default {
    name: 'AboutView',

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <section id="about" class="vh-100">
        <div class="container h-100">

            <div class="row h-50 align-items-center grow-left">

                <div class="col">
                    <h1 class="text-light text-center">Hi there 👋</h1>
                    <h2 class="text-light text-center">My name is Francesco and I am a Full Stack Web Developing Student
                    </h2>
                </div>



            </div>

            <div class="row justify-content-end h-50 align-items-center grow-right">

                <div class="col col-md-6 text-light ">

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