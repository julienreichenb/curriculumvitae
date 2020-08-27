<template>
    <b-card class="mb-5 interest-card"
        :img-src="require('@/assets/img/interests/' + item.t_key + 'png')"
        :img-top="isMobile"
        :img-left="!isMobile ? (isEven ? true : false) : false"
        :img-right="!isMobile ? (!isEven ? true : false) : false"
        :img-height="isMobile ? '150' : '350'"
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
        isEven: { type: Boolean, default: true },
        isMobile: { type: Boolean, default: true },
    },
}
</script>

<style lang="scss">
.interest-card img {
    object-fit: cover;
}
</style>