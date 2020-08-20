<template>
    <div id="countdown">
        <h3 class="border-bottom border-light pb-2">
            Next birthday in 
            <span class="number text-info">{{ countdown.d }}</span> days
        </h3>
        <h4 class="number">
            <span class="text-info">{{ formatNum(countdown.h) }}</span>
             h 
            <span class="text-info">{{ formatNum(countdown.m) }}</span>
             m 
            <span class="text-info">{{ formatNum(countdown.s) }}</span>
             s
        </h4>
    </div>
</template>

<script>
export default {
    props: {
        countdown: { type: Object, required: true }
    },
    methods: {
        formatNum(n) {
            return n > 9 ? n : '0' + n
        }
    }
}
</script>

<style lang="scss" scoped>
#countdown {
    padding: 1rem;

    .number {
        font-family: 'Calculator';
        font-weight: bold;
    }
}
</style>