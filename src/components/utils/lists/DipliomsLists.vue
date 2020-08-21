<template>
    <div>
        <h2>{{ $t(tkey + 'diploms') }}</h2>
        <b-row class="my-5 pt-5 border-top"
            v-for="d in list" 
            :key="d.id" 
            :class="!d.over && 'text-muted'"
        >
            <b-col md="4" class="pr-3">
                <h4 class="font-weight-bold">{{ d.date }}</h4>
                <h5>{{ $t(tkey + d.t_key + 'location') }}</h5>
            </b-col>
            <b-col class="pl-5" :md="d.pdf ? '6' : '8'" >
                <h4 class="font-weight-bold">{{ $t(tkey + d.t_key + 'title') }}</h4>
                <h5 v-html="$t(tkey + d.t_key + 'desc')" />
            </b-col>
            <b-col md="2" v-if="d.pdf" class="text-right">
                <DownloadIcon :item="d" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import DownloadIcon from '../DownloadIcon'
export default {
    components: {
        DownloadIcon,
    },
    props: {
        list: { type: Array, default: null },
        tkey: { type: String, default: null },
    },
}
</script>