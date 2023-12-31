## Creazione guidata del progetto
```bash
npm create vite @latest (creazione guidata del progetto)
```

## crea il template di un progetto all'interno della cartella un cui ci troviamo se usiamo il ".", 
### altrimenti scriviamo il nome della directory e questa verrà creata nella posizione attuale)
```bash
npm create vite@latest . -- --template vue
```

## per installare i pacchetti di cui il progetto ha bisogno
```bash
npm install
```

## Install Bootstrap. Now we can install Bootstrap. 
We’ll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. 
If you don’t plan on using those components, you can omit Popper here.
```bash
npm i --save bootstrap @popperjs/core
```

## Install additional dependency. In addition to Vite and Bootstrap, we need another dependency (Sass) to properly import and bundle Bootstrap’s CSS.
```bash
npm i --save-dev sass
```

## Install Axios
```bash
npm install axios
```

## Per caricare il server e visualizzare la pagina
```bash
npm run dev
```

## Sul terminale chiude il server
```bash
CTRL + C sul terminale chiude il server
```

SPOSTARE style.css in src/assets/scss E MODIFICARE L'ESTENZIONE IN .scss

MODIFICARE L'IMPORTAZIONE IN main.js
```js
import './assets/scss/style.scss'
```

IMPORTARE BOOTSTRAP IN style.scss
```js
@use 'bootstrap'
```

AGGIUNGERE LA STRUTTURA BASE DELL'ESPORTAZIONE DEI METODI DI Vue DENTRO IL TAG SCRIPT IN app.vue
```js
import axios from 'axios';

export default {
    name: 'App',
    data() {

        return {

        }

    },

    methods: {

    },

    mounted() {

    }

}
```
IMPORTARE AXIOS PRIMA DELL'export

```js
import axios from 'axios';
```

DEFINIRE LE VARIABILI NECESSARIE
```js
data() {

        return {
            baseurl: 'http://127.0.0.1:8000/', // URL BASE DI laravel_api
            portfolioApi: 'api/projects',
            projects: [],
        }

    },
```

ADD THE AXIOS CALL ON App MOUNT
```js
mounted() {
        // CHIAMATA AXIOS QUANDO App E' MOUNTED
        axios.get(this.baseurl + this.portfolioApi)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data
            }).catch(err => {
                console.error(err);
            })
    }
```

## Vue Router
https://router.vuejs.org/installation.html

```bash
npm install vue-router@4
```

```html
<!-- links (ad esempio nella navbar) -->
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

<!-- destinazione, nel markup dove deve essere montata la view -->
<router-view></router-view>
```

creiamo un nuovo file chiamato router.js per tenere ordinata la logica e non mettere tutto in main.js:
```js
import {creaWebHashHistory, createRouter} from 'vue-router';

// if you use variables with markup
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// import components if you use components
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

// array rotte
const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView},
    ];

//crea istanza di vuerouter

// con cdn
// const router = VueRouter.createRouter({
// history: createWebHashHistory(),
// routes,
// })

// con pacchetto npm
// router E' UNA ISTANZA di createRouter() CHE USA LE ROTTE DICHIARATE NELLA const routes
const router = createRouter(
    {
// HYSTORY E' UN'ISTANZA DI createWebHashHistorry()
history: createWebHashHistorry(),
routes
})

// export
export {router}
```

main.js
```js
// IMPORT DEL FILE router.js APPENA CREATO
import {router} from './router.js'

// AGGIUNTA DELL'USO DI router SU createApp
createApp(App).use(router).mount('#app')
```

SU api.php DELL'APP BACKEND

OTTENERE GLI ULTIMI TRE PROJECTS
```php
Route::get('projects/latest', function () {
    $projects = Project::with('type', 'technologies')->OrderbyDesc('id')->take(3)->get();
    return response()->json([
        'status' => 'success',
        'result' => $projects
    ]);
});
```

OTTENERE SINGOLO POST TRAMITE SLUG
```php
Route::get('projects/{project:slug}', function ($slug) {

    $project = Project::with('type', 'technologies')->where('slug', $slug)->first();

    if ($project) {
        return response()->json([
        'success' => true,
        'result' => $project 
        ]);
    } else {
        return response()->json([
        'success' => false,
        'result' => 'Project not found' 
        ]);
    }
});
```
LATO FRONTEND

DEFINIRE ROTTA SINGOLO POST GESTITA TRAMITE SLUG
https://router.vuejs.org/guide/essentials/named-routes.html
https://router.vuejs.org/guide/essentials/named-views.html
https://router.vuejs.org/guide/essentials/dynamic-matching
```js
{path: '/project/:slug', 
name: 'project',
component: SingleProjectView, 
},
```

DEFINIRE IL router-link:
```html
<router-link :to="{ name: 'project', params: { slug: project.slug } }">
View Project</router-link>
```

```js
// UNA VOLTA INSTALLATO VUE ROUTER ABBIAMO ACCESSO ALLA VARIABILE SPECIALE $route
mounted() {
        // `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`
        axios.get(this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`)
            .then(response => {
                console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                console.log('SINGLE PROJECT:', response.data.result);
                this.project = response.data.result;
            }).catch(err => {
                console.error(err);
            })
    },
```

REDIRECT DI UNA PAGINA E 404
https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route

GENERARE UN PATH PER QUALSIASI PERCORSO NON CORRISPONDA A QUELLI REGISTRATI:
```js
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
},
```

INSERIRE UNA CONDIZIONE NELLA CHIAMATA AXIOS CHE RIDIRIGA ALLA ROTTA CREATA NotFound
```js
axios.get(this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`)
            .then(response => {

                console.log('AXIOS RESPONSE:', response.data.success);

                if (response.data.success) {
                    console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                    console.log('SINGLE PROJECT:', response.data.result);
                    this.project = response.data.result;
                } else {
                    console.log('SINGLE PROJECT QUERY RESULT:', response.data.result);
                    this.$router.push({ name: 'NotFound' })
                }

            }).catch(err => {
                console.error(err);
            })
```

CREARE LA PAGINA NotFound.vue