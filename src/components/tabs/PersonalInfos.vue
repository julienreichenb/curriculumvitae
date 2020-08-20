<template>
    <div>
        <b-container class="pt-4 pb-5"> 
            <b-row class="mb-4">
                <b-col
                    class="info-elem"
                    md="4" 
                    v-for="info in infos.values" 
                    :key="info.id"
                >
                    <b-row class="vertical-center"
                        :id="info.tooltip && 'tooltip-birthday'"
                    >
                        <b-col lg="4" md="2" sm="4">
                            <font-awesome-layers class="fa-2x">
                                <font-awesome-icon
                                    :icon="info.icon" 
                                    :color="color"
                                />
                            </font-awesome-layers>                
                        </b-col>
                        <b-col lg="8" md="10" sm="8" class="text-left">
                            <div>{{ $t(t_key + infos.t_key + info.label) }}</div>
                            <h6 class="font-weight-bold">
                                {{ info.value[0] }}
                                <span v-if="info.value[1]">{{ $t(t_key + infos.t_key + info.value[1]) }}</span>
                            </h6>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col lg="3">
                    <h2 class="border-bottom pb-1">
                        {{ $t(t_key + contact.t_key + contact.values.pro.title) }}
                    </h2>
                    <b-row class="vertical-center my-4" 
                        v-for="i in contact.values.pro.values" 
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
                                <font-awesome-icon class="fa-2x" 
                                    :icon="i.icon" 
                                    :color="i.color"
                                />
                            </div>
                        </b-col>
                        <b-col lg="8" md="10" sm="8" class="text-left">
                            <b-link v-if="i.url" :href="i.url" target="_blank">                                    
                                <h5>
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
                </b-col>
                <b-col lg="9">
                
                </b-col>
            </b-row>
        </b-container>
        <b-tooltip target="tooltip-birthday" 
            triggers="hover"
            placement="left"
        >
            <BirthdayTimer :countdown="formatCountDown" />
        </b-tooltip>
    </div>
</template>

<script>
import * as moment from 'moment'
import BirthdayTimer from '../utils/BirthdayTimer'
export default {
    components: {
        BirthdayTimer
    },
    props: {
        color: { type: String, default: 'Red' }
    },
    computed: {
        getBg() {
            return { background: this.color }
        },
        formatCountDown() {
            let seconds = this.countDown
            const days = Math.floor(seconds / (3600*24));
            seconds  -= days*3600*24;
            const hours   = Math.floor(seconds / 3600);
            seconds  -= hours*3600;
            const minutes = Math.floor(seconds / 60);
            seconds  -= minutes*60;
            return { 
                d: days,
                h: hours,
                m: minutes, 
                s: seconds
            }
        }
    },
    watch: {
        countDown: {
            handler() {
                setTimeout(() => {
                    this.countDown = moment(this.nextBirthday).diff(moment(), 'seconds')   
                }, 1000);
            },
            immediate: true
        },
    },
    data() {
        return {
            countDown: null,
            birthdate: new Date(1992, 4, 15),
            nextBirthday: moment(new Date().getFullYear() + 1 + '-05-15'),
            t_key: 'personal_info.',
            infos: {
                t_key: 'info.',
                values: [
                    {
                        id: 0,
                        label: "age",
                        value: [null, "years_old"],
                        icon: ['fad', 'birthday-cake'],
                        tooltip: true,
                    },
                    {
                        id: 1,
                        label: "status",
                        value: [null, "couple"],
                        icon: ['fad', 'rings-wedding'],
                    },
                    {
                        id: 2,
                        label: "driving_licence",
                        value: [null, 'cat_b'],
                        icon: ['fad', 'car'],
                    },            
                ],
            },
            contact: {
                t_key: "contact.",
                values: {
                    pro: {
                        title: 'pro',
                        values: [
                            {
                                id: 0,
                                label: 'LinkedIn',
                                icon: ['fab', 'linkedin-in'],
                                color: '#0072b1',
                                url: 'https://www.linkedin.com/in/julien-reichenbach/',
                            },
                            {
                                id: 1,
                                label: 'GitHub',
                                icon: ['fab', 'github'],
                                color: '#000000',
                                url: 'https://github.com/julienreichenb',
                            },
                            {
                                id: 2,
                                label: 'GitHub',
                                icon: ['fab', 'github'],
                                color: '#000000',
                                value: "Lol",
                            },
                        ]
                    },
                    games: {
                        title: 'games',
                        values: [
                            {
                                id: 0,
                                label: 'Steam',
                                icon: ['fab', 'steam'],
                                color: '#031549',
                                url: 'https://steamcommunity.com/profiles/76561198003716292',
                            },
                            {
                                id: 1,
                                label: 'Battle.net',
                                value: 'fisherman#2917',
                                icon: ['fab', 'battle-net'],
                                color: '#00aeef',                            
                            }
                        ]
                    }
                }
            }
        }
    },
    created() {
        this.getAge()
    },
    methods: {
        getAge() {
            const today = new Date()
            let age = today.getFullYear() - this.birthdate.getFullYear()
            const m = today.getMonth() - this.birthdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < this.birthdate.getDate())) {
                age = age - 1;
            }
            this.infos.values.find(x => x.label === 'age').value[0] = age
        },
    },
}
</script>

<style lang="scss">
.info-elem {
    border-right: 1px solid $dark;
}
.info-elem:last-child {
    border-right: none;
}
</style>