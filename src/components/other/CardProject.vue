<template>
  <div class="card">
    <h2 class="title">{{ data.name }}</h2>
    <p class="summary">{{ reduceText(data.summary) }}</p>
    <router-link :to="{ name: 'Project', params: { slug: data.slug } }">
      invia
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    data: Object,
  },
  methods: {
    reduceText(text) {
      return text.substring(0, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;

  padding: 20px;
  margin: 20px;
  border: 3px solid rgb(244, 244, 242);
  background-color: rgb(173, 171, 171);
  .title {
    font-weight: bold;
  }
  button {
    padding: 10px 20px;
    border-radius: 20px;
  }
}
</style>
