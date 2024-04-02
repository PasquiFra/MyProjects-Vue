<script>
import ProjectCard from '../ProjectCard.vue';
import AppLoader from '../AppLoader.vue';
import AppAlert from '../AppAlert.vue';
import axios from "axios";

const endpoint = 'http://localhost:8000/api/projects/'

export default {
    name: 'Progetti',
    components: {
        ProjectCard, AppLoader, AppAlert
    },
    data: () => ({
        projects: [],
        isLoading: false,
        hasAlert: false
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true
            axios.get(endpoint)
                .then(res => {
                    this.projects = res.data['data'];
                    this.hasAlert = false;
                })
                .catch(err => {
                    console.error(err);
                    this.hasAlert = true;
                })
                .then(() => { this.isLoading = false })
        }
    },
    mounted() {
        this.fetchProjects();
    }
}
</script>

<template>

    <AppAlert :hasAlert="hasAlert" @close="hasAlert = false" @retry="fetchProjects" />
    <AppLoader v-if="isLoading" />

    <div v-else class="container">

        <h5 class="text-center py-2">I miei progetti</h5>

        <div class="card my-3">
            <ul class="w-100">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>