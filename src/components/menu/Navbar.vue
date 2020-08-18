<template>
    <b-navbar id="navbar" toggleable="sm" sticky>
        <b-navbar-toggle target="nav-text-collapse" />
        <b-navbar-brand id="navbar-brand">
            <img id="me" :src="pic" width="70" />
            BootstrapVue
        </b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-text>Navbar text</b-nav-text>
            </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</template>

<script>
import Pic from '@/assets/img/me.png'
export default {
    props: {
        items: {required: true}
    },
    data() {
        return {
            pic: null
        }
    },
    mounted() {
        this.pic = Pic
    }
}
</script>

<style lang="scss" scoped>
#navbar {
    background-color: $base-color-dark;
    border-bottom: 1px solid $base-color-darkest;

    #navbar-brand {
        color: white;
    }

    img#me {
    border: 1px solid white;
    border-radius: 15px;
    filter: grayscale(.8)
    }

    img#me:hover {
        filter: grayscale(0)
    }
}


</style>