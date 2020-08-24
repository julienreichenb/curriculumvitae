<template>
    <div>
        <b-row>
            <b-col class="text-left px-5 my-3"
                lg="12" xl="6"
                v-for="item in orderBy(list, 'level', -1)" 
                :key="item.label + item.id"
            >
                <div class="d-flex justify-content-between">
                    <h5 v-if="item.icon">
                        <font-awesome-layers v-if="item.icon" 
                            class="fa-lg mr-1"
                            :style="{ color: item.color ? item.color : color }"
                        >
                            <font-awesome-icon :icon="item.icon" />
                        </font-awesome-layers>
                        <em class="text-muted ml-2" v-if="tkey[1] !=='soft_skills.'">{{ item.label }}</em>
                        <em class="text-muted ml-2" v-else>{{ $t(generateTooltipLabel(item)) }}</em>
                    </h5>
                    <h5 v-else>
                        {{ item.label }}
                    </h5>
                    <div v-if="item.desc">
                        <font-awesome-layers class="text-center pr-3"
                            v-b-tooltip.hover.topleft
                            :title="$t(generateTooltipLabel(item))"                            
                        >
                            <font-awesome-icon icon="circle" class="text-black" />
                            <font-awesome-icon icon="question" color="white" transform="shrink-6" />
                        </font-awesome-layers>
                    </div>
                </div>
                <b-progress :max="max" :value="item.level" class="mb-3" height="1.8rem" />            
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Vue2Filters from 'vue2-filters'
export default {
    mixins: [Vue2Filters.mixin],
    props: {
        tkey: { type: Array, default: null },
        list: { type: Array, required: true },
        color: { type: String, default: 'Chocolate' },
    },
    data() {
        return {
            max: 100,
        }
    },
    methods: {
        generateTooltipLabel(item) {
            return this.tkey[0] + this.tkey[1] + item.label.toLowerCase().replace(/\s/g, '')
        }
    }
}
</script>

<style scoped lang="scss">

</style>