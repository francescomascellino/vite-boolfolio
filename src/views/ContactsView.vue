<script >

export default {
    name: 'ContactsView',

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <section id="contacts" class="vh-100 pt-5">
        <div class="container h-100 d-flex flex-column">

            <div class="row align-items-center justify-content-start grow-right">

                <div class="col">
                    <h1 class="text-light text-center">Are you interested in my work?</h1>
                    <h2 class="text-light text-center">Contact Me!</h2>
                </div>

            </div>

            <div class="row align-items-center pt-5 grow-left">

                <div class="col col-md-6 text-light ">

                    <h3>You can find me here:</h3>
                    <ul class="list-unstyled">
                        <li>LINK 1</li>
                        <li>LINK 2</li>
                        <li>LINK 3</li>
                        <li>LINK 4</li>
                    </ul>

                </div>

            </div>

            <div class="row justify-content-end align-items-center pt-5 grow-right">

                <div class="col col-md-6 text-light ">

                    <h3>Or you can write me an email:</h3>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="abc@mail.com">
                        <small id="emailHelpId" class="form-text text-muted">Enter you email adress</small>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label"></label>
                        <textarea class="form-control" name="message" id="message" rows="3"
                            aria-describedby="messageHelpId"></textarea>
                        <small id="messageHelpId" class="form-text text-muted">Write your message here</small>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/About.scss';
</style>