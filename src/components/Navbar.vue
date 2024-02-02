<script >

export default {

    name: 'Navbar'

}

</script>

<template>
    <nav id="navbar" class="nav justify-content-center position-fixed z-1 w-100 shadow">

        <router-link class="nav-link my-1" to="/" :class="$route.path === '/' ? 'selected' : ''">About
            Me</router-link>

        <router-link class="nav-link my-1" to="/projects" :class="$route.path === '/projects' ? 'selected' : ''">Projects</router-link>

        <router-link class="nav-link my-1" to="/contacts" :class="$route.path === '/contacts' ? 'selected' : ''">Contacts</router-link>

    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Navbar.scss';
</style>