<template>
    <b-row>
        <b-col class="text-left px-5 my-3"
            lg="12" xl="6"
            v-for="item in orderBy(list, 'level', -1)" 
            :key="item.id"
        >
            <h5>{{ item.label }}</h5>
            <b-progress :max="max" :value="item.level" class="mb-3" height="1.8rem" />
        </b-col>
    </b-row>
</template>

<script>
import Vue2Filters from 'vue2-filters'
export default {
    mixins: [Vue2Filters.mixin],
    props: {
        tkey: { type: String, default: '' },
        list: { type: Array, required: true },
    },
    data() {
        return {
            max: 100,
        }
    }
}
</script>

<style scoped lang="scss">

</style>