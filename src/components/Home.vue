<template>
  <div class="drawer">
    <h1>Выдвижной ящик</h1>
    <ul>
      <li @click="$router.push({ name: 'drawer-form', params: {color: 'silver'} })">
        <div class="wrapper">
          <img src="../assets/drawer_silver.jpg">
          <span>Серебристый</span>
        </div>
      </li>
      <li @click="$router.push({ name: 'drawer-form', params: {color: 'darkGrey'} })">
        <div class="wrapper">
          <img src="../assets/drawer_wet-asphalt.jpg">
          <span>Тёмно-серый</span>
        </div>
      </li>
      <li @click="$router.push({ name: 'drawer-form', params: {color: 'beige'} })">
        <div class="wrapper">
          <img src="../assets/drawer_beige.jpg">
          <span>Бежевый</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  display: inline-flex;
  margin-left: 20px;
  border: 2px solid grey;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
li:hover {
  cursor: pointer;
}
span {
  padding-top: 20px;
}
</style>