<template>
    <b-container fluid class="pt-4"> 
        <InterestsLists class="interest" 
            :tkey="t_key" 
            :item="i" 
            :isEven="i.id % 2 == 0"
            :isMobile="isMobile"
            v-for="i in interests" 
            :key="i.id"
        />
    </b-container>
</template>

<script>
import InterestsLists from '../utils/lists/InterestsLists'
export default {
    components: {
        InterestsLists,
    },
    props: {
        color: { type: String, default: 'Navy' },
        bootstrap: { type: String, default: 'dark' },
    },
    data() {
        return {
            t_key: 'interests.',
            isMobile: false,
            interests: [
                {
                    id: 0,
                    t_key: 'gaming.',
                },
                {
                    id: 1,
                    t_key: 'sport.',
                },
                {
                    id: 2,
                    t_key: 'read.',
                },
            ],
        }
    },
    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
        onResize () {
            this.isMobile = window.innerWidth < 1420
        }
    },    
}
</script>

<style lang="scss">
.interest strong {
    color: $dark;
}
</style>