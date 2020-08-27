<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h2>
                {{ $t(tkey + 'udemy') }}
            </h2>
            <small class="text-muted font-italic">
                <a href="https://www.udemy.com/" target="_blank">
                    &rarr; Udemy <span v-if="!isMobile">Site</span>
                </a>
            </small>
        </div>
        <b-row class="my-5 pt-5 border-top"
            v-for="d in list" 
            :key="d.id" 
        >
            <b-col md="3" class="pr-3 text-center">
                <h4 class="font-weight-bold">
                    <font-awesome-icon 
                        class="fa-4x"
                        :class="isMobile && 'mb-3'"
                        :icon="d.icon"
                        :color="d.color"
                    />
                </h4>
            </b-col>
            <b-col md="9" class="pl-5" >
                <h4 class="font-weight-bold">
                    <em>
                        <a :href="d.url" target="_blank">
                            {{ $t(tkey + d.t_key + 'title') }}
                        </a>
                    </em>
                </h4>
                <h5 v-html="$t(tkey + d.t_key + 'desc')" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    props: {
        list: { type: Array, default: null },
        tkey: { type: String, default: null },
        isMobile: { type: Boolean, default: false },
    }
}
</script>