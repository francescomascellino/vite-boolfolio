<script >

export default {
    name: 'ProjectCard',

    props: {

        project: Object,
        baseUrl: String,

    },

    methods: {

    }

}

</script>

<template>
    <div class="col">
        <div class="card h-100">

            <div class="card-header" style="height: 4rem">
                <h5>{{ project.title }}</h5>
            </div>

            <img class="img-fluid object-fit-cover" style="height: 300px" :src="this.baseUrl + 'storage/' + project.thumb"
                :alt="project.title">

            <div class="card-body">
                <p><strong>Description: </strong>{{ project.description }}</p>

                <p><strong>Type: </strong>

                    <span v-if="project.type"> {{ project.type.name }} </span>
                    <span v-else>Uncategorized</span>
                </p>

                <p><strong> Technologies used: </strong></p>

                <div class="d-flex" v-if="project.technologies.length > 0">
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

                <p><i class="fa-brands fa-github"></i> <a :href="project.github" class="text-decoration-none text-black"
                        target="blank">{{ project.github }}</a>
                </p>

                <p><i class="fa-solid fa-link"></i> <a :href="project.link" class="text-decoration-none text-black"
                        target="blank">{{ project.link }}</a></p>

            </div>

        </div>
    </div>
</template>

<style></style>
