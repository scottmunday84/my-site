<template>
    <About />
    <Skills />
    <Copyright />
</template>

<script>
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Copyright from './components/Copyright.vue';

export default {
  name: 'App',
  components: {
      About,
      Skills
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
