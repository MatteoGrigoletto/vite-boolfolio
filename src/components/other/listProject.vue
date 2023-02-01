<template>
  <section>
    <div class="card-sloat">
      <div v-for="proj in projects">
        <CardProject :data="proj" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CardProject from "./CardProject.vue";

export default {
  name: "listProject",
  components: {
    CardProject,
  },
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

<style lang="scss" scoped>
.card-sloat {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
</style>
