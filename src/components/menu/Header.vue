<template>
    <div id="navbar" :class="'bg-' + color">
        <img id="me" :src="pic" width="250" />
        <div class="m-4 pb-4 border-bottom border-light">
            <h1 class="display-4 text-info">
                JULIEN REICHENBACH
            </h1>
            <h2 class="text-white">
                <em>{{ $t('title') }}</em>
            </h2>
        </div>
        <b-row>
            <b-col 
                class="mt-3 text-info" 
                lg="4" 
                v-for="info in infos" 
                :key="info.id"
            >
                <b-row class="vertical-center header-info pt-2 pb-2 ml-1 mr-1">
                    <b-col md="2">
                        <font-awesome-layers class="fa-2x">
                            <font-awesome-icon
                                :icon="info.icon" 
                                color="white"
                            />
                        </font-awesome-layers>                
                    </b-col>
                    <b-col md="8" class="text-left">
                        <div>{{ $t(t_key + info.label) }}</div>
                        <h6 class="font-weight-bold">
                            {{ info.value[0] }}                        
                        </h6>
                        <h6 class="font-weight-bold">
                            {{ info.value[1] && info.value[1] }}                        
                        </h6>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Pic from '@/assets/img/me.png'
export default {
    props: {
        color: { type: String, default: 'danger' },
        infos: { type: Array, required: true },
    },
    data() {
        return {
            pic: null,
            t_key: 'header.',            
        }
    },
    mounted() {
        this.pic = Pic    
    },
}
</script>

<style lang="scss">
#navbar {
    z-index: 100;
    padding: 10rem;
    height: 100vh;

    img#me {
        padding: 3px;
        border: 1px solid $white;
        border-radius: 10000px;
        filter: grayscale(.8);
        transition: 0.2s;
    }

    img#me:hover {
        filter: grayscale(0)
    }

    h4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-info {
        border: 2px solid transparent;
        border-radius: 5px;
        transition: 0.3s;
    }

    .header-info:hover {
        background: $white;
        border: 2px solid $info;
        color: $txt-color;

        svg {
            color: $black;
        }
    }
}
</style>