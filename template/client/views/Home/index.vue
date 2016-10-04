<template>
<div class="home">
  <h1>Just Fun</h1>
  <h3>Powered By Vue2</h3>
  <router-link to="/404">
  <h2>Test</h2>
  </router-link>
  <div class="flex">
    flex autoprefixer
  </div>
  <div class="rem">
    1
  </div>
</div>
</template>

<style lang="css">
$color: #41b883;

.home {
  text-align:center;
  margin-top: 10%;
  color: $color;
}

.flex {
  display: flex;
  text-align: center;
  justify-content: center;
}
.rem {
  width: 1rem;
  height: 1rem;
  margin:  0 auto;
  background-color: #e66;
}
</style>
