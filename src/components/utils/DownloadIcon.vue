<template>
    <a :href="item.pdf" :download="'JulienReichenbach-' + item.t_key">
        <font-awesome-icon class="fa-4x download-icon" 
            :icon="icon"
            :color="iconColor"
            @mouseover="overing"
            @mouseout="outing"
        />
    </a>
</template>

<script>
export default {
    props: {
        item: { type: Object, required: true }
    },
    data() {
        return {
            iconColor: 'darkred',
            icon: ['fad', 'file-pdf'],
            path: process.env.BASE_URL,
        }
    },
    mounted() {
        this.loadPdf()
    },
    methods: {
        overing() {
            this.iconColor = 'darkblue'
            this.icon = ['fad', 'download']
        },
        outing() {
            this.iconColor = 'darkred'
            this.icon = ['fad', 'file-pdf']
        },
        loadPdf() {
            this.item.pdf = this.path + 'pdf/' + this.item.t_key + 'pdf'        
        },
    },
}
</script>

<style scoped>
.download-icon {
    transition: .2s;
}
</style>