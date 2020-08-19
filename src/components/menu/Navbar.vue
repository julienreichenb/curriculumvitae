<template>
    <div id="navbar" class="bg-dark">
        <img id="me" :src="pic" width="200" />
        <h1 class="display-4 text-info m-5 border-bottom border-light">JULIEN REICHENBACH</h1>
        <font-awesome-icon :icon="['fad', 'acorn']" />
    </div>
</template>

<script>
import Pic from '@/assets/img/me.png'
export default {
    props: {
        items: { required: true }
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
    padding: 2rem 10rem;

    img#me {
        border-radius: 55px;
        filter: grayscale(.8)
    }

    img#me:hover {
        filter: grayscale(0)
    }
}


</style>