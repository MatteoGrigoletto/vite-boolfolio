<template>
  <div>
    <h1>Home</h1>
    <listProject />
  </div>
</template>

<script>
import listProject from "../other/listProject.vue";
export default {
  name: "HomePage",
  components: {
    listProject,
  },
};
</script>

<style lang="scss" scoped></style>
