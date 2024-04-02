<script>
import AppHeader from "./components/AppHeader.vue"

export default {
  name: 'Boolfolio',
  components: {
    AppHeader
  }
};
</script>

<template>
  <AppHeader />
  <main class="container">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
