<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Toggle id="vue-toggle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toggle from './components/Toggle.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Toggle
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
