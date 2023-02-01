<template>
  <div>
    <ul>
      <li v-for="proj in projects">{{ proj.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "listProject",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((responce) => {
      this.projects = responce.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
