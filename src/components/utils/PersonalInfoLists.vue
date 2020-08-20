<template>
    <div class="mb-5">
        <h2 class="border-bottom pb-1 font-weight-bold" :style="{ color }">
            {{ $t(key + list.title) }}
        </h2>
        <b-row class="vertical-center my-4" 
            v-for="i in list.values" 
            :key="i.id"
        >
            <b-col lg="4" md="2" sm="4">
                <b-link v-if="i.url" :href="i.url" target="_blank">
                    <font-awesome-layers class="fa-3x">
                        <font-awesome-icon 
                            icon="circle" 
                            :color="i.color" 
                        />
                        <font-awesome-icon 
                            icon="circle" 
                            color="white" 
                            transform="shrink-1"
                        />
                        <font-awesome-icon 
                            :icon="i.icon" 
                            :color="i.color"
                            transform="shrink-6"
                        />                       
                    </font-awesome-layers>                            
                </b-link>
                <div v-else>
                    <font-awesome-layers class="fa-3x">
                        <font-awesome-icon 
                            icon="circle" 
                            :color="i.color" 
                        />
                        <font-awesome-icon 
                            icon="circle" 
                            color="white" 
                            transform="shrink-1"
                        />
                        <font-awesome-icon 
                            :icon="i.icon" 
                            :color="i.color"
                            transform="shrink-6"
                        />                       
                    </font-awesome-layers>      
                </div>
            </b-col>
            <b-col lg="8" md="10" sm="8" class="text-left">
                <b-link 
                    class="text-dark"
                    v-if="i.url" 
                    :href="i.url" 
                    target="_blank"
                >
                    <h5 class="font-weight-bold">
                        {{ i.label }}
                    </h5>
                </b-link>
                <div v-else>
                    <h5>
                        <span :class="i.value && 'font-weight-bold'">
                            {{ i.label }}
                        </span>
                        <p class="text-muted" v-if="i.value">
                            {{ i.value }}
                        </p>
                    </h5>
                </div>
            </b-col>              
        </b-row>
    </div>
</template>

<script>
export default {
    props: {
        list: { type: Object, default: null },
        color: { type: String, default: 'black' },
    },
    data() {
        return {
            key: 'personal_info.contact.',
        }
    }
}
</script>

<style lang="scss" scoped>
a > h5 {
    color: $txt-color;
}
</style>