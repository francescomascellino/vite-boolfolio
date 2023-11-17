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
