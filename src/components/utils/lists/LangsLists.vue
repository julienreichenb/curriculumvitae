<template>
    <b-row class="m-5 pl-5 text-left">
        <b-col class="pl-5" mb="4" v-for="item in list" :key="item.id">
            <b-row>
                <b-col md="2">
                    <img :src="getImg(item.label)" width="100%  " />
                </b-col>
                <b-col md="10">
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