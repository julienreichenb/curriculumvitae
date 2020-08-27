<template>
    <div>
        <h2>{{ $t(tkey + 'diploms') }}</h2>
        <b-row class="my-5 pt-5 border-top no-gutters"
            v-for="d in list" 
            :key="d.id" 
            :class="!d.over && 'text-muted'"
        >
            <b-col v-if="isMobile" sm="12">
                <b-row >
                    <b-col sm="8" class="pr-xl-3">
                        <h4 class="font-weight-bold">{{ d.date }}</h4>
                        <h5>{{ $t(tkey + d.t_key + 'location') }}</h5>
                    </b-col>
                    <b-col sm="4" v-if="d.pdf" class="text-right">
                        <DownloadIcon :item="d" :size="'3x'" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="4" v-else>
                <h4 class="font-weight-bold">{{ d.date }}</h4>
                <h5>{{ $t(tkey + d.t_key + 'location') }}</h5>
            </b-col>
            <b-col class="diplom-desc" :md="d.pdf ? (!isMobile ? '6' : '12') : '8'" >
                <h4 class="font-weight-bold">{{ $t(tkey + d.t_key + 'title') }}</h4>
                <h5 v-html="$t(tkey + d.t_key + 'desc')" />
            </b-col>
            <b-col md="2" v-if="d.pdf && !isMobile" class="text-right">
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
        isMobile: { type: Boolean, default: false }
    },
}
</script>

<style lang="scss">
.diplom-desc {
    padding-left: .8rem;
}

@include media-breakpoint-down(lg) {
    .diplom-desc {
        padding-top: .7rem;
        padding-left: 0;
    }
}
</style>