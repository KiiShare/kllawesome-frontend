<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">KLL Awesome</h1>
        </div>
      </div>
    </section>
    <SubmitConfig></SubmitConfig>
  </div>
</template>

<script>
import SubmitConfig from './SubmitConfig.vue'
export default {
  name: 'App',
  components: {
    SubmitConfig
  },
  data () {
    return {
      msg: 'KLL Awesome Prototype'
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
