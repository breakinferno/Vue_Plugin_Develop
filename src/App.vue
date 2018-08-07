<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Comment/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Comment from './components/Comment'

export default {
  name: 'App',
  components: {
    Comment
  }
}
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
