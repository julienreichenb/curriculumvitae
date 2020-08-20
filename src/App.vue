<template>
  <div id="app">
    <Header />
    <Tabs />
  </div>
</template>

<script>
import Header from './components/menu/Header'
import Tabs from './components/menu/Tabs'

export default {
  name: 'App',
  components: {
    Header,
    Tabs
  },
  metaInfo: {
    title: 'Curriculum Vitae',
    titleTemplate: '%s | Julien Reichenbach'
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);
@font-face {
  font-family: "Calculator";
  src: local("Calculator"),
   url(./assets/fonts/Calculator.ttf) format("truetype");
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $txt-color;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
