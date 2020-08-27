<template>
    <div id="navbar" :class="'bg-' + color">
        <img id="me" :src="pic" />
        <div class="m-4 m-md-3 m-sm-1 pb-4 pb-md-3 pb-sm-1
            border-bottom border-light">
            <h1 class="display-4 text-info py-sm-2">
                JULIEN REICHENBACH
            </h1>
            <h2 class="text-white">
                <em>{{ $t('title') }}</em>
            </h2>
        </div>
        <b-row class="mt-5 no-gutters" 
            cols-xl="4" 
            cols-lg="2"
            cols-md="2"
        >
            <b-col 
                class="mt-3 text-info" 
                v-for="info in infos" 
                :key="info.id"
                sm="12"
            >
                <b-row class="vertical-center no-gutters text-center header-info p-2 mx-2 info-label">
                    <b-col xl="12" md="12" sm="3" class="mb-xl-3">
                        <font-awesome-layers class="fa-3x">
                            <font-awesome-icon
                                :icon="info.icon" 
                                color="white"
                            />
                        </font-awesome-layers>                
                    </b-col>
                    <b-col>
                        <div>{{ $t(t_key + info.label) }}</div>
                        <div v-if="info.value">
                            <h6 class="font-weight-bold">
                                    {{ info.value[0] && (info.t ? $t(t_key + info.value[0]) : info.value[0]) }}                        
                            </h6>
                            <h6 class="font-weight-bold">
                                {{ info.value[1] && info.value[1] }}                        
                            </h6>
                        </div>
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
    padding: 7rem;
    min-height: 100vh;

    img#me {
        padding: 3px;
        width: 300px;
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

    @include media-breakpoint-down(sm) {
        padding: 2rem .7rem;

        img#me {
            padding: 2px;
            width: 190px;
            margin-bottom: 10px;
        }

        .display-4 {
            font-size: 2.1rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .info-label * {
            text-align: center;
            font-size: 1.2rem;

            svg {
                font-size: 2rem;
            }
        }    
    }
}


</style>