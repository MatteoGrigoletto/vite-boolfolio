<template>
  <main>
    <ListProject />
  </main>
</template>

<script>
import ListProject from "./other/listProject.vue";
export default {
  name: "AppMain",
  components: { ListProject },
};
</script>

<style lang="scss" scoped>
main {
  background-color: black;
}
</style>
