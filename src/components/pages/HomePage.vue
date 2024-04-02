<script>
import AppLoader from "..//AppLoader.vue"
import AppAlert from "../AppAlert.vue"
import ProjectsPage from "./ProjectsPage.vue";

const endpoint = 'http://localhost:8000/api/projects/'


export default {
    name: 'Boolfolio',
    components: {
        AppLoader, AppAlert, ProjectsPage
    },
};
</script>

<template>
    <main class="container">
        <div class="container">
            <RouterLink to="/profile" class="card btn py-3 my-3">Il mio profilo</RouterLink>
            <ProjectsPage :projects="projects" />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
