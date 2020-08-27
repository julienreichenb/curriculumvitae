<template>
    <div>
        <b-row class="my-4 pb-4 border-bottom"
            v-for="e in list" 
            :key="e.id" 
        >
            <b-col v-if="isMobile" sm="12">
                <b-row >
                    <b-col sm="8">
                        <h4 class="font-weight-bold">
                            {{ $t(tkey + e.t_key + 'location') }}
                        </h4>
                        <h5>{{ displayDates(e.date) }}
                            <span v-if="!e.date[1]">
                                {{ $t(tkey + 'today') }}
                            </span>
                        </h5>
                    </b-col>
                    <b-col sm="4" v-if="e.pdf" class="text-right">
                        <DownloadIcon :item="e" :size="'3x'" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="4" v-else>
                <h4 class="font-weight-bold">
                    {{ $t(tkey + e.t_key + 'location') }}
                </h4>
                <h5>
                    {{ displayDates(e.date) }}
                    <span v-if="!e.date[1]">
                        {{ $t(tkey + 'today') }}
                    </span>
                </h5>
            </b-col>
            <b-col :class="!isMobile ? 'pl-5' : 'pt-4'" :md="e.pdf ? (!isMobile ? '6' : '12') : '8'" >
                <h4 class="font-weight-bold">{{ $t(tkey + e.t_key + 'title') }}</h4>
                <h6 v-if="e.desc" class="text-muted">
                    {{ $t(tkey + e.t_key + 'desc') }}
                </h6>
                <div class="ml-3"
                    v-for="task in e.tasks" 
                    :key="task"
                >
                    <font-awesome-icon icon="check" color="green" class="mr-3" />
                    {{ $t(tkey + e.t_key + task) }}
                </div>
            </b-col>
            <b-col md="2" v-if="e.pdf && !isMobile" class="text-right">
                <DownloadIcon :item="e" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import DownloadIcon from '../DownloadIcon'
import * as moment from 'moment'
export default {
    components: {
        DownloadIcon,
    },
    props: {
        list: { type: Array, default: null },
        tkey: { type: String, default: null },
        isMobile: { type: Boolean, default: false },
    },
    methods: {
        displayDates(d) {
            moment.locale('fr-ch')
            const start = moment(d[0])
            const end = d[1] ? moment(d[1]) : null
            return start.format('MMM YYYY') + ' ' + this.$t(this.tkey + 'to') + (end !== null ? ' ' +  end.format('MMM YYYY') : '')
        }
    }
}
</script>

<style lang="scss">
code {
    padding: .5rem;
    border-radius: 5px;
    background: $dark;
}
</style>