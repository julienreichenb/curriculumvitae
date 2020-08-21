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
                    <PersonalInfoLists :color="color" :list="contact.values.pro" />
                    <PersonalInfoLists :color="color" :list="contact.values.games" />
                    <PersonalInfoLists :color="color" :list="contact.values.others" />
                </b-col>
                <b-col lg="9" class="pl-5">
                    <b-card 
                        :img-src="picCard"
                        img-alt="Card Image"                    
                        no-body
                    >           
                        <b-card-body>
                            <h3 class="pb-2 mb-2 border-bottom">{{ $t(t_key + presentation.key + 'title') }}</h3>
                            <b-card-text 
                                id="card-presentation"
                                v-for="p in presentation.p" 
                                :key="p"
                                v-html="$t(t_key + presentation.key + p)"
                            />
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        <b-tooltip target="tooltip-birthday" 
            triggers="hover"
            placement="bottomright"
        >
            <BirthdayTimer :countdown="formatCountDown" />
        </b-tooltip>
        <b-tooltip target="tooltip-contact" 
            triggers="hover"
        >
            <b-row>
                <b-col lg="1">
                    <font-awesome-layers>
                            <font-awesome-icon
                                :icon="['fad', 'phone']" 
                                color="white"
                            />
                        </font-awesome-layers>            
                </b-col>
                <b-col>
                    (+41) 78 / 203 70 39
                </b-col>                
            </b-row>
            <b-row>
                <b-col sm="1">
                    <font-awesome-layers>
                            <font-awesome-icon
                                :icon="['fad', 'envelope']" 
                                color="skyblue"
                            />
                        </font-awesome-layers>            
                </b-col>
                <b-col>
                    julien.reichenb@gmail.com
                </b-col>
            </b-row>
        </b-tooltip>
    </div>
</template>

<script>
import * as moment from 'moment'
import BirthdayTimer from '../utils/BirthdayTimer'
import PersonalInfoLists from '../utils/lists/PersonalInfoLists'
import PicCard from '../../assets/img/card-pic.png'
export default {
    components: {
        BirthdayTimer,
        PersonalInfoLists,
    },
    props: {
        color: { type: String, default: 'Red' },
        bootstrap: { type: String, default: 'danger' },
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
            t_key: 'personal_info.',
            countDown: null,
            birthdate: new Date(1992, 4, 15),
            nextBirthday: moment(new Date().getFullYear() + 1 + '-05-15'),
            picCard: null,
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
                                icon: ['fab', 'github-alt'],
                                color: '#000000',
                                url: 'https://github.com/julienreichenb',
                            },
                        ]
                    },
                    games: {
                        title: 'games',
                        values: [
                            {
                                id: 0,
                                label: 'Steam',
                                icon: ['fab', 'steam-symbol'],
                                color: '#031549',
                                url: 'https://steamcommunity.com/profiles/76561198003716292',
                            },
                            {
                                id: 1,
                                label: 'Battle.net',
                                value: 'fisherman#2917',
                                icon: ['fab', 'battle-net'],
                                color: '#00aeef',                            
                            },
                        ]
                    },
                    others: {
                        title: 'others',
                        values: [
                            {
                                id: 0,
                                label: 'Discord',
                                value: 'fishermanyo#0287',
                                icon: ['fab', 'discord'],
                                color: '#7289da',
                            },
                            {
                                id: 1,
                                label: 'Telegram',
                                value: '@julienreichenb',
                                icon: ['fab', 'telegram-plane'],
                                color: '#0088cc',                            
                            },
                        ]
                    }
                }
            },
            presentation: {
                key: 'who_am_i.',
                p: ['general', 'college', 'hes', 'next'],
            }
        }
    },
    created() {
        this.getAge()
        this.picCard = PicCard
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

.card {
    img {
        filter: grayscale(.65);
    }
}


</style>