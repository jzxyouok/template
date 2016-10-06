<template>
<div class="home">
  <h1>Just Fun</h1>
  <h3>Powered By Vue2</h3>
  <router-link to="/404">
  <h2>Test</h2>
  </router-link>
  <div class="flex">
      <mt-cell title="flex autoprefixer"></mt-cell>
  </div>
  <div class="rem">
    <mt-switch>开关</mt-switch>
    <mt-progress :value="80" :bar-height="5"></mt-progress>

  </div>
</div>
</template>

<style lang="css">
$color: #999;

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
}
</style>
