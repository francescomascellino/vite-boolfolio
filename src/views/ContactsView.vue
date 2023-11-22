<script >

import axios from 'axios'

import { store } from '../store';

export default {
    name: 'ContactsView',

    data() {
        return {
            store,

            loading: false, // -> NEL SUBBMIT :disabled="loading"
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            // success: null,
            // payload: {},
        }
    },

    methods: {

        sendForm() {

            this.loading = true;

            // SVUOTA ERRORI E RISULTATI
            this.errors = [];

            this.success = null;

            // ASSEGNA A PAYLOAD I DATI DEL FORM
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            };
            console.log('PAYLOAD:', payload);

            console.log('url:', this.store.baseUrl + 'api/lead');

            axios.post(this.store.baseUrl + 'api/lead/', payload)
                .then(response => {

                    console.log('RESPONSE:', response);

                    // ASSEGNA A SUCCESS IL VALORE DI data.success. SE CI SONO callWithErrorHandling, QUESTA SARA' UNDEFINED ED ENTRERA' NELL'IF
                    const success = response.data.success;

                    if (!success) {

                        console.log('Errors:', response.data.errors);
                        // ASSEGNA A this.errors IL VALORE DELLA RESPONSE errors IN MODO DA POTERLI USARE IN PAGINA
                        this.errors = response.data.errors;

                    } else {
                        console.log(response);

                        /* 'Request failed with status code 500'
                        exception: "BadMethodCallException"
                        file: "C:\\MAMP\\htdocs\\Laravel\\laravel-api\\vendor\\laravel\\framework\\src\\Illuminate\\Validation\\Validator.php"
                        line: 1609
                        message: "Method Illuminate\\Validation\\Validator::validateMx does not exist." */

                    }

                })

        }

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

                    <!-- SOCIAL LINKS -->
                    <ul class="list-unstyled fs-5">

                        <li>
                            <a href="https://github.com/francescomascellino" target="blank" class="icon-link"><i
                                    class="fa-brands fa-github"></i> GitHub</a>
                        </li>

                        <li>
                            <a href="https://www.freecodecamp.org/coldshark" target="blank" class="icon-link"><i
                                    class="fa-brands fa-free-code-camp"></i> freeCodeCamp </a>
                        </li>

                        <li>
                            <a href="https://codepen.io/coldshark" target="blank" class="icon-link"><i
                                    class="fa-brands fa-codepen"></i> CodePen.io</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/francesco-m-793199ab/" target="blank" class="icon-link"><i
                                    class="fa-brands fa-linkedin"></i> Linkedin</a>
                        </li>

                    </ul>

                </div>

            </div>

            <div class="row justify-content-end grow-right">

                <div class="col col-md-6 text-light m-2">

                    <h3>Or you can write me an email:</h3>

                    <!-- EMAIL FORM -->
                    <form action="" v-on:submit.prevent="sendForm()">

                        <div class="mb-2">
                            <label for="name" class="form-label"> <strong>Name:</strong></label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name"
                                aria-describedby="nameHelper" v-model="name">

                            <small id="nameHelper" class="text-light">Let me know you: type your name</small>
                        </div>

                        <div class="mb-2">
                            <label for="email" class="form-label"><strong>Email:</strong></label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                                placeholder="your@email.com" v-model="email">

                            <small id="emailHelpId" class="form-text text-light">Enter you email adress</small>
                        </div>

                        <div class="mb-2">
                            <label for="phone" class="form-label"><strong>Phone Number:</strong></label>
                            <input type="tel" name="phone" id="phone" class="form-control" placeholder="999 999 9999"
                                aria-describedby="phoneHelper" v-model="phone">

                            <small id="phoneHelper" class="text-light">Enter your phone number if you wish to be called
                                back</small>
                        </div>

                        <div class="mb-2">
                            <label for="message" class="form-label"><strong>Message:</strong></label>
                            <textarea class="form-control" name="message" id="message" rows="3"
                                aria-describedby="messageHelpId" v-model="message"></textarea>

                            <small id="messageHelpId" class="form-text text-light">Leave me a message</small>
                        </div>

                        <button class="btn" type="submit">Submit</button>

                    </form>

                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/animations.scss';

a:hover {
    text-shadow: 4px 4px 4px #000000;
}
</style>