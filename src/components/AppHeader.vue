<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'homepage' }">Home Page</router-link></li>
      <li>
        <router-link :to="{ name: 'Description' }">Description</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin: 10px 30px;
  justify-content: space-around;
  list-style: none;
}
</style>
