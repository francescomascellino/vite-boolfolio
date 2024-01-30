<script >

export default {
    name: 'ProjectCard',

    props: {

        project: Object,
        baseUrl: String,

    },

    methods: {

        // TRASFORMA IL PERCORSO DELL'IMMAGINE LOCALE IN UN URL
        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

    }

}

</script>

<template>
    <div class="col">
        <div class="card h-100 shadow border border-black grow-left">

            <div class="card-header d-flex align-items-center" style="height: 4rem">
                <h5>{{ project.title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }}</h5>
            </div>

            <div class="img-container position-relative">

                <router-link :to="{
                    name: 'project',
                    params: { slug: project.slug }
                }" class="overlay position-absolute start-0 top-0 w-100 h-100 p-3 d-flex align-items-center">

                    <p class="text-light"><strong>Description: </strong>{{ project.description }}</p>

                </router-link>

                <img class="img-fluid object-fit-cover" style="height: 300px; width: 100%;"
                    :src="this.baseUrl + 'storage/' + project.thumb"
                    @error="$event.target.src = getPlaceholderImg('../assets/img/404.jpg')" :alt="project.title">

            </div>

            <div class="card-body d-flex justify-content-center flex-column">

                <p><strong>Type: </strong>
                    <span v-if="project.type"> {{ project.type.name }} </span>
                    <span v-else>Uncategorized</span>
                </p>

                <p><strong> Technologies used: </strong></p>

                <div class="d-flex flex-wrap" v-if="project.technologies.length > 0">
                    <ul class="d-flex g-2 list-unstyled" v-for="technology in project.technologies">

                        <li class="badge bg-success me-1">
                            <i class="fa-solid fa-code"></i> {{ technology.name }}
                        </li>

                    </ul>
                </div>

                <div class="d-flex" v-else>
                    <ul class="d-flex gap-2 list-unstyled">

                        <li class="badge bg-secondary">
                            <i class="fa-regular fa-file"></i> None/Others
                        </li>

                    </ul>
                </div>

                <p v-if="project.github"><a :href="project.github" class="text-decoration-none text-black icon-link"
                        target="blank"><i class="fa-brands fa-github"></i> View on GitHub</a></p>
                <p v-else><i class="fa-brands fa-github"></i> No Repository Avaiable <i
                        class="fa-regular fa-face-frown"></i></p>

                <p v-if="project.link"><a :href="project.link" class="text-decoration-none text-black icon-link"
                        target="blank"><i class="fa-solid fa-link"></i> Visit the Website</a></p>
                <p v-else><i class="fa-solid fa-link"></i> This Project has not been published yet <i
                        class="fa-regular fa-face-frown"></i>
                </p>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/ProjectCard.scss';
// @use '../assets/scss/partials/animations.scss';
</style>
