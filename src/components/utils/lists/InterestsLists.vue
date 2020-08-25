<template>
    <b-card class="mb-5"
        :img-src="require('@/assets/img/interests/' + item.t_key + 'png')"
        :img-left="isEven ? true : false"
        :img-right="!isEven ? true : false"
        img-height="300"
        no-body
    >
        <b-card-body>
            <h3 class="pb-3 border-bottom">{{ $t(tkey + item.t_key + 'title') }}</h3>
            <b-card-text class="p-3" v-html="$t(tkey + item.t_key + 'desc')" />
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    props: {
        tkey: { type: String, required: true },
        item: { type: Object, required: true },
        isEven: { type: Boolean, default: true }
    },
}
</script>