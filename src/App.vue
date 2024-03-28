<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import axios from "axios";

const endpoint = 'http://localhost:8000/api/projects/'


export default {
  name:'Boolfolio',
  components: {
    AppHeader, AppMain
  },
  data: () => ({
    projects: []
  }),
  methods:{
    fetchProjects(){
      axios.get(endpoint)
      .then(res => {
        this.projects = res.data['0']['projects'];
      })
    }
  },
  created(){
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader/>
  <AppMain :projects="projects"/>

</template>

<style lang="scss" scoped>

</style>
