<script>
import AppLoader from '../AppLoader.vue';
import AppAlert from '../AppAlert.vue';
import ProjectCard from '../ProjectCard.vue';
import axios from 'axios';

const baseUri = 'http://localhost:8000/api/projects/'

export default {
    name: 'ShowProject',
    components: {
        AppLoader, AppAlert, ProjectCard
    },
    data: () => ({
        project: '',
        isLoading: false,
        hasAlert: false
    }),
    computed: {
        pubblicationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    },
    methods: {
        fetchProjects() {
            this.isLoading = true;
            const slug = this.$route.params.slug;
            const endpoint = baseUri + slug;
            axios.get(endpoint)
                .then(res => {
                    this.project = res.data['0'];
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
    <AppLoader v-if="isLoading && !project" />

    <div v-if="!isLoading && project" class="container">
        <h5 class="text-center py-2">Progetto ID-{{ project.id }}</h5>
        <h3 class="text-center" v-text="project.title"></h3>
        <p class="text-center my-3 mt-5">{{ project.description }}</p>
        <div>
            Tipologia:
            <span :style="{ 'background-color': project.type.color }" class="badge">{{ project.type.label }}</span>
        </div>
        <div v-if="project.technologies">
            Tecnologie:
            <ul>
                <li v-for="technology in project.technologies" :style="{ color: technology.color }">
                    {{ technology.label }}
                </li>
            </ul>
        </div>
        <div class="d-flex justify-content-between">
            <div>
                Vai a GitHub: <a href="#" class="link">{{ project.project_url }}</a>
            </div>
            <div>
                Creato il: {{ pubblicationDate }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>