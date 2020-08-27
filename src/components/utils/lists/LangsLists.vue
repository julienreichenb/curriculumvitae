<template>
    <b-row class="my-4 no-gutters text-left lang-list">
        <b-col mb="4" v-for="item in list" :key="item.id">
            <b-row class="no-gutters">
                <b-col xl="3" lg="4" md="6" sm="12"
                    class="text-right img-col"
                    :class="!isMobile ? 'pr-3' : 'pr-1'"
                >
                    <img :src="getImg(item.label)" width="50" />
                </b-col>
                <b-col xl="9" lg="8" md="6" sm="12"
                    class="pr-2"
                >
                    <h5>{{ $t(tkey + t_key + item.label) }}</h5>
                    <h4 class="font-weight-bold">{{ $t(tkey + t_key + item.level) }}</h4>
                </b-col>
            </b-row>
        </b-col>    
    </b-row>
</template>

<script>
import FR from '@/assets/img/lang/fr.png'
import EN from '@/assets/img/lang/en.png'
import DE from '@/assets/img/lang/de.png'
export default {
    props: {
        list: { type: Array, required: true },
        tkey: { type: String, default: '' },
        isMobile: { type: Boolean, default: false },
    },
    data() {
        return {
            t_key: 'lang.',
            path: '@/assets/img/lang/',
        }
    },
    methods: {
        getImg(pic) {
            switch(pic) {
                case 'fr':
                    return FR
                case 'en':
                    return EN
                case 'de':
                    return DE
            }
        },
    },
}
</script>

<style lang="scss">
.lang-list {
    @include media-breakpoint-down(lg) {
        h4 {
            font-size: 1.2rem;
        }
        h5 {
            font-size: 1rem;
        }
    }
    @include media-breakpoint-down(md) {
        h4 {
            font-size: 1rem;
        }
        h5 {
            font-size: 1rem;
        }
    }
    @include media-breakpoint-down(sm) {
        margin-bottom: 1rem !important;

        * {
            text-align: center;
        }

        .img-col {
            padding: 0 !important;
            text-align: center !important;
        }

        h4 {
            font-size: 1rem;
        }
        h5 {
            padding-top: 1rem !important;
            font-size: 1rem;
        }
    }
}

</style>