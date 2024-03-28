<script>
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'Main',
    components: { ProjectCard },
    props: { projects: Array },
}
</script> 

<template>
    <div class="container">
        <a href="#" class="card btn py-3 my-3">Il mio profilo</a>
        <h5 class="text-center py-2">I miei progetti</h5>
        <ProjectCard :project="project" v-for="project in projects" :key="project.id"/>
    </div>
</template>

<style lang="scss" scoped>

a {
    text-decoration: none;
    color: black;
}

</style>