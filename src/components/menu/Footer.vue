<template>
    <div id="footer" class="text-white d-flex justify-content-between align-items-center" :class="'bg-' + color">
        <small>
            <em>Last update @ August 2020</em>
        </small>
        <small>
            {{ $t(t_key + 'app') }}
            <b-link class="text-white mx-2" href="https://vuejs.org/" target="_blank">
                <img class="mr-1" :src="vuePic" alt="Vue" width="20" />
                <strong>VueJs</strong>
            </b-link>
            &
            <b-link class="text-white mx-2" href="https://bootstrap-vue.org/docs" target="_blank">
                <img class="mr-1" :src="bootstrapPic" alt="Vue" width="20" />
                <strong>Bootstrap-Vue</strong>
            </b-link>
        </small>
    </div>
</template>

<script>
import VuePic from '../../assets/img/vue.png'
import BootstrapPic from '../../assets/img/bootstrap-vue.png'
export default {
    props: {
        color: { type: String, default: 'danger' }
    },
    data() {
        return {
            t_key: 'footer.',
            vuePic: null,
            bootstrapPic: null,
        }
    },
    mounted() {
        this.vuePic = VuePic
        this.bootstrapPic = BootstrapPic
    }
}
</script>

<style lang="scss">
#footer {
    z-index: 10000;
    width: 100%;
    padding: .6rem 3rem;
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>