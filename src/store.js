import { reactive } from 'vue';

import axios from 'axios';

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000/', // URL BASE DI laravel_api
    portfolioApi: 'api/projects',
    portfolioLatest: '/latest',
    projects: null,
    project: null,
    types: null,
    technologies: null,
    queryData: null,
    queryLinks: null,
    latestProjects: null,


    // CHIAMATA AXIOS QUANDO LA HOME E' MOUNTED
    getProjects() {
        axios.get(this.baseUrl + this.portfolioApi,
            {
                params: {
                    page: this.currentPage
                }
            })
            .then(response => {
                console.log('PROJECTS:', response);
                this.projects = response.data.result.data;
                this.queryData = response.data.result;
                this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
    },

    // NAVIGAZIONE TRA LE PAGINE DATE DALLA QUERY ALL'API
    navigate(url) {
        axios.get(url)
            .then(response => {
                console.log("RESPONSE:", response);
                this.projects = response.data.result.data;
                this.queryData = response.data.result;
                this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
        this.currentPage = this.queryData.current_page;
    },

    // QUERY PER OTTENERE GLI ULTIMI 3 PROGETTI
    getLatest() {
        axios.get(this.baseUrl + this.portfolioApi + this.portfolioLatest)
            .then(response => {
                this.latestProjects = response.data.result;
                console.log('LATEST PROJECTS:', this.latestProjects);
            }).catch(err => {
                console.error(err);
            })
    },

    // CHIAMATA AXIOS QUANDO LA HOME E' MOUNTED
    getTypes() {
        axios.get(this.baseUrl + 'api/types')
            .then(response => {
                console.log('TYPES:', response);
                this.types = response.data.result;
            }).catch(err => {
                console.error(err);
            })
    },

    // CHIAMATA AXIOS QUANDO LA HOME E' MOUNTED
    getTechnologies() {
        axios.get(this.baseUrl + 'api/technologies')
            .then(response => {
                console.log('TECHNOLOGIES:', response);
                this.technologies = response.data.result;
            }).catch(err => {
                console.error(err);
            })
    },

})