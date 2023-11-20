<script >
import { store } from '../store';


export default {
    name: 'NotFound',

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

    },

}

</script>

<template>
    <section id="404" class="vh-100">
        <div class="container h-100 text-center">

            <h1>This isn't the page you're looking for...</h1>

            <h1><i class="fa-regular fa-face-meh-blank"></i></h1>

        </div>
    </section>
</template>

<style lang="scss" scoped></style>