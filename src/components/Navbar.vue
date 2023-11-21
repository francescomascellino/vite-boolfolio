<script >

export default {
    name: 'Navbar',

}

</script>

<template>
    <nav id="navbar" class="nav justify-content-center position-fixed z-1 w-100 shadow">

        <router-link class="nav-link" to="/">About Me</router-link>

        <router-link class="nav-link" to="/projects">Projects</router-link>

        <router-link class="nav-link" to="/contacts">Contacts</router-link>

    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Navbar.scss';
</style>