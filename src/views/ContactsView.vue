<script >

import axios from 'axios'

import { store } from '../store';

export default {
    name: 'ContactsView',

    data() {
        return {
            store,

            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null,

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

                        console.log('VALIDATION PASSED:', response);

                        // SVUOTA I CAMPI
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.phone = '';

                        this.success = response.data.message;

                    }

                    this.loading = false;

                })
                .catch(err => {
                    console.error(err);
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

            <div class="row align-items-center pt-6 grow-left">

                <div class="col col-md-6 text-light ">

                    <h3>You can find me here:</h3>

                    <!-- SOCIAL LINKS -->
                    <ul class="list-unstyled fs-6">

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
                                aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">

                            <small id="nameHelper" class="text-light">Let me know you: type your name</small>

                            <small v-if="errors.name" v-for="message in errors.name" id="nameHelper"
                                class="text-danger d-block"> {{ message }}</small>
                        </div>

                        <div class="mb-2">
                            <label for="email" class="form-label"><strong>Email:</strong></label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                                placeholder="your@email.com" v-model="email" :class="{ 'is-invalid': errors.email }">

                            <small id="emailHelpId" class="form-text text-light">Enter you email adress</small>

                            <small v-if="errors.email" v-for="message in errors.email" id="nameHelper"
                                class="text-danger d-block"> {{ message }}</small>

                        </div>

                        <div class="mb-2">
                            <label for="phone" class="form-label"><strong>Phone Number:</strong></label>
                            <input type="tel" name="phone" id="phone" class="form-control" placeholder="999 999 9999"
                                aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">

                            <small id="phoneHelper" class="text-light">Enter your phone number if you wish to be called
                                back</small>

                            <small v-if="errors.phone" v-for="message in errors.phone" id="nameHelper"
                                class="text-danger d-block"> {{ message }}</small>

                        </div>

                        <div class="mb-2">
                            <label for="message" class="form-label"><strong>Message:</strong></label>
                            <textarea class="form-control" name="message" id="message" rows="3"
                                aria-describedby="messageHelpId" v-model="message"
                                :class="{ 'is-invalid': errors.message }"></textarea>

                            <small id="messageHelpId" class="form-text text-light">Leave me a message</small>

                            <small v-if="errors.message" v-for="message in errors.message" id="nameHelper"
                                class="text-danger d-block"> {{ message }}</small>

                        </div>

                        <button class="btn w-25" type="submit" :disabled="loading">

                            <span v-if="loading">Sending <i class="fa-solid fa-circle-notch fa-spin"></i></span>

                            <span v-else>Send <i class="fa-solid fa-paper-plane"></i></span>

                        </button> <span v-if="success" class="text-success text-capitalize mx-3"> {{ success }}</span>

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