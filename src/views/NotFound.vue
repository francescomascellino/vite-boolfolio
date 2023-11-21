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

        // TRASFORMA IL PERCORSO DELL'IMMAGINE LOCALE IN UN URL
        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

    },
    mounted() {

    },

}

</script>

<template>
    <section id="404" class="vh-100 pt-5">
        <div class="container h-100 text-center text-light">

            <h2>This isn't the Project you're looking for...</h2>

            <h1><i class="fa-regular fa-face-meh-blank"></i></h1>

            <img :src="getPlaceholderImg('../assets/img/obinotfound.jpg')" alt="Project Not Found"
                class="border rounded border-0 shadow-lg mt-3">

        </div>
    </section>
</template>

<style lang="scss" scoped></style>