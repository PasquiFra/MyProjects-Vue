<script>

export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 150);
            return abstract + '...';
        }
    }
}
</script>

<template>

    <li class="w-100 project">
        <RouterLink :to="{ name: 'show-project', params: { slug: project.slug } }" class="nav-link">
            <!--!OPPURE <RouterLink :to="`/project/${project.slug}`" class="nav-link"> -->
            <h3 class="text-center" v-text="project.title"></h3>
        </RouterLink>
        <p class="text-center my-3 mt-5">{{ abstract }}</p>
        <div class="p-3">
            Vai a GitHub:<a href="#" class="link">{{ project.project_url }}</a>
        </div>
    </li>

</template>

<style lang="scss" scoped>
#go-to-project {

    display: flex;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;

    h3 {
        justify-self: center;
    }

    button {
        justify-self: end;
    }
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
    margin: 25px 0;
    border-bottom: 1px solid goldenrod;
}

a {
    text-decoration: none;
    color: black;
}

.link {
    text-decoration: underline;
    color: dodgerblue;
    padding-left: 5px;
}
</style>