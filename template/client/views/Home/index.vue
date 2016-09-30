<template>
<div class="home">
  <h1>Just Fun</h1>
  <h3>Powered By Vue2</h3>
  <a target="__black" href="https://github.com/dingyiming/template">click here</a>
  <router-link to="/404">
  <h2>Test</h2>
  </router-link>
  <div class="test">
    123
  </div>
  <div class="flex">
    <p>123</p>
    <p>sdaklfj</p>
  </div>
</div>
</template>

<style lang="css">
.home {
  text-align:center;
  margin-top: 10%;
  color: #41b883;
}
.flex {
  display: flex;
}

$color: green;
.test {
  size:100px;
  @if 3 > 5 {
      background: $color;
  }
  @else {
      background: blue;
  }
}
</style>
