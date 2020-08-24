<template>
  <div id="app">
    <Header :infos="infos" :color="color" />
    <HeaderSmall :infos="infos" :color="color" />
    <Tabs @change="swapColor" @goto="goTo" />
    <Footer :color="color" />
  </div>
</template>

<script>
import Header from './components/menu/Header'
import HeaderSmall from './components/menu/HeaderSmall'
import Footer from './components/menu/Footer'
import Tabs from './components/menu/Tabs'

export default {
  name: 'App',
  components: {
    Header,
    HeaderSmall,
    Footer,
    Tabs
  },
  data() {
    return {
      color: 'dark',
      infos: [
        {
            id: 0,
            label: "phone",
            value: ["(+41) 78 / 203 70 39"],
            icon: ["fad", "mobile-alt"],
        },
        {
            id: 1,
            label: "mail",
            value: ["julien.reichenb@gmail.com"],                        
            icon: ["fad", "envelope-open-text"],
            isMail: true,
        },
        {
            id: 2,
            label: "address",
            value: ["Chemin du Vieux-Canal 42", "1950 Sion"],
            icon: ["fad", "mailbox"],
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0,0)
    setTimeout(() => {
      this.goTo("small-header")
    }, 3000)
  },
  methods: {
    swapColor(c) {
      this.color = c
    },
    goTo(id) {
      document.getElementById(id).scrollIntoView();
    }
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

html {
  scroll-behavior: smooth !important;
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
