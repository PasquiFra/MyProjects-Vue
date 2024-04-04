<script>

export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 150);
            return abstract + '...';
        },

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
    }
}
</script>

<template>

    <li class="w-100 project">
        <RouterLink :to="{ name: 'show-project', params: { slug: project.slug } }" class="nav-link">
            <!--!OPPURE <RouterLink :to="`/project/${project.slug}`" class="nav-link"> -->
            <h3 class="text-center" v-text="project.title"></h3>
            <p class="text-center my-3 mt-5">{{ abstract }}</p>
        </RouterLink>
        <div class="d-flex justify-content-between p-3">
            <div>
                Vai a GitHub: <a href="#" class="link">{{ project.project_url }}</a>
            </div>
            <div>
                Creato il: {{ pubblicationDate }}
            </div>
        </div>
    </li>

</template>

<style lang="scss" scoped>
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