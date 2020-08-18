<template>
  <div id="app">
    <Navbar :items="items" />
  </div>
</template>

<script>
import Navbar from './components/menu/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      items: [
        {
          key: 'first'
        },
        {
          key: 'second'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $txt-color;
}
</style>
