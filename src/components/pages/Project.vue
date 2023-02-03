<template>
  <div class="container">
    <div class="card-desc">
      <h3>Describe:</h3>
      <p>{{ project.summary }}</p>
    </div>
  </div>
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
        console.log(response)
        this.project = response.data.project;
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(228, 210, 210);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-desc {
    background-color: rgb(148, 228, 138);
    width: 600px;
    min-height: 400px;
    padding: 30px;
  }
}
</style>
