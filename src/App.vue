<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppLoader from "./components/AppLoader.vue"
import AppAlert from "./components/AppAlert.vue"
import axios from "axios";

const endpoint = 'http://localhost:8000/api/projects/'


export default {
  name: 'Boolfolio',
  components: {
    AppHeader, AppMain, AppLoader, AppAlert
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
};
</script>

<template>
  <AppHeader />
  <main class="container">
    <AppAlert :hasAlert="hasAlert" @close="hasAlert = false" @retry="fetchProjects" />
    <AppLoader v-if="isLoading" />
    <AppMain :projects="projects" v-else />
  </main>
</template>

<style lang="scss" scoped></style>
