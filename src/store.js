import { reactive } from 'vue';

import axios from 'axios'

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000/', // URL BASE DI laravel_api
    portfolioApi: 'api/projects',
    pageQuery: '?page=',
    projects: [],
    // currentPage: 1,
    queryData: null,
    queryLinks: null,

    getProjects() {
        // CHIAMATA AXIOS QUANDO App E' MOUNTED
        axios.get(this.baseUrl + this.portfolioApi,
            {
                params: {
                    page: this.currentPage
                }
            })
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data;
                this.queryData = response.data.result;
                this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
    },

    navigate(url) {
        axios.get(url)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data;
                this.queryData = response.data.result;
                this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
        this.currentPage = this.queryData.current_page;
    },
})