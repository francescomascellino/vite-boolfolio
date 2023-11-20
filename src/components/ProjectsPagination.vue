<script >

import { store } from '../store';

export default {
    name: 'ProjectsPagination',

    props: {

    },

    data() {

        return {

            store,

        }

    },

    methods: {

    }

}

</script>

<template>
    <nav aria-label="Page navigation" class="my-4 grow-right" v-if="store.queryData != null">

        <ul class="pagination">

            <li class="page-item shadow-lg"
                :class="(link.label == store.queryData.current_page ? 'active' : ''), (link.url == null ? 'disabled' : '')"
                aria-current="page" v-for="link in store.queryLinks" :key="link.id">

                <a class="page-link border border-black" href="#projects" @click="store.navigate(link.url)"
                    v-html="link.label"></a>

            </li>
        </ul>

    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/ProjectsPagination.scss';
@use '../assets/scss/partials/animations.scss';
</style>