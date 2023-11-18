<script >

export default {
    name: 'Navbar',

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <nav id="navbar" class="nav justify-content-center position-fixed z-1 w-100 shadow">
        <a class="nav-link" href="#about" aria-current="page">About Me</a>
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link disabled" href="#contacts">Contacts</a>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Navbar.scss';
</style>