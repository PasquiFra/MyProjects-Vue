<script>

export default {
    name: 'Progetto',
    components: {

    },
    props: { project: Object },
}
</script>

<template>
    <div class="container">
        <h5 class="text-center py-2">Progetto ID-{{ project.id }}</h5>
        <h3 class="text-center" v-text="project.title"></h3>
        <p class="text-center my-3 mt-5">{{ abstract }}</p>
        <div class="p-3">
            Vai a GitHub:<a href="#" class="link">{{ project.project_url }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>