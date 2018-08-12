<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>===
      <router-link to="/about">About</router-link>===
      <router-link to="/apitest">apitest</router-link>===
      <router-link to="/apitest_vueconfig_daili">apitest_vueconfig_daili</router-link>===
      <router-link to="/registapitest">registapitest</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
