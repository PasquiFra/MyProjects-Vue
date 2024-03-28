<script>

export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed:{
        abstract(){
            const abstract = this.project.description.slice(0, 150);
            return abstract + '...';
        }
    }
}
</script> 

<template>

    <div class="card my-3">
        <ul class="w-100"> 
            <li class="w-100 project">
                <a href="#">
                    <h3 class="text-center" v-text="project.title"></h3> 
                    <p class="text-center my-3 mt-5">{{ abstract }}</p>
                    <div class="p-3">
                        Vai a GitHub:<a href="#" class="link">{{project.project_url}}</a>
                    </div>
                </a>
            </li>  
        </ul>
    </div>

</template>

<style lang="scss" scoped>


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