<template>
  {{ project.summary }}
</template>

<script>
import axios from "axios";
export default {
  name: "Project",
  data() {
    return {
      project: "",
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<style lang="scss" scoped></style>
