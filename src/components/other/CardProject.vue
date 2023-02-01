<template>
  <div class="card">
    <h2 class="title">{{ data.name }}</h2>
    <p class="summary">{{ reduceText(data.summary) }}</p>
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
  height: 200px;
  padding: 20px;
  margin: 20px;
  border: 3px solid rgb(244, 244, 244);
  background-color: rgb(173, 171, 171);
  .title {
    font-weight: bold;
  }
  .summary {
    overflow-y: scroll;
  }
}
</style>
