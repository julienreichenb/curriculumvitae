<template>
   <b-navbar id="small-header" 
        class="text-white" 
        :class="'bg-' + color" 
        sticky
        toggleable="lg"
    >
    <b-navbar-brand class="mr-5" v-on:click="scrollTop">
        <img :src="pic" alt="me" width="70" />
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav 
            class="mx-5"
            v-for="info in infos" 
            :key="info.id"
        >
            <b-nav-text class="text-white font-weight-bold">
                <font-awesome-icon
                    class="fa-2x mr-3"
                    :icon="info.icon"
                />
                <span>{{ info.value[0] }}</span>
            </b-nav-text>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Pic from '@/assets/img/me.png'
export default {
    props: {
        color: { type: String, default: 'danger' },
        infos: { type: Array, required: true },
    },
    data() {
        return {
            pic: null,
        }
    },
    mounted() {
        this.pic = Pic
    },
    methods: {
        scrollTop() {
            window.scrollTo(0,0)
        }
    }
}
</script>

<style lang="scss" scoped>
#small-header {
    padding: .7rem 2rem;

    img {
        border-radius: 100px;
    }
}
</style>