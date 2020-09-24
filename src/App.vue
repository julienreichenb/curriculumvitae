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
        {
            id: 3,
            label: "references",
            value: ["ondemand"],
            t: true,
            icon: ["fad", "user-tie"],
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
@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/_variables';
@import '~bootstrap/scss/mixins/_breakpoints';

@font-face {
  font-family: "Calculator";
  src: local("Calculator"),
   url(./assets/fonts/Calculator.ttf) format("truetype");
}

html {
  scroll-behavior: smooth !important;
  overflow-x: hidden !important;
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

  // Vue transition
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

.view-in {
  width: inherit;
  position: relative;
  opacity: 1;
  transition: 1s;
  right: -100em;
  transform: translateX(-100em);
}

.view-out {
  opacity: 0;
}

</style>
