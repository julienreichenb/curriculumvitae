<template>
    <b-container fluid class="pb-5">
        <LangsLists :list="lang" :tkey="t_key" />
        <b-alert show fade dismissible>
            <span v-html="$t(t_key + 'alert')" />
        </b-alert>
        <b-tabs id="skills"
            vertical 
            v-model="current"
            :active-nav-item-class="'text-bold text-white bg-' + bootstrap"
        >
            <b-tab class="px-5" v-for="skill in skills" :key="skill.id">
                <template v-slot:title>
                    <div class="d-flex justify-content-between align-items-center p-2">
                        <div>
                            <font-awesome-icon 
                                class="mr-2"
                                :icon="skill.icon"
                            />
                            {{ $t(t_key + skill.t_key + 'title') }}                        
                        </div>
                       <b-badge pill
                            :variant="current === skill.id ? 'light' : bootstrap" 
                            class="mx-3"
                        >
                            {{ skill.values.length }}
                        </b-badge>
                    </div>
                </template>
                <SkillsLists :list="skill.values" :tkey="[t_key, skill.t_key]" :color="color" />
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
import SkillsLists from '../utils/lists/SkillsLists'
import LangsLists from '../utils/lists/LangsLists'
export default {
    props: {
        color: { type: String, default: 'Chocolate' },
        bootstrap: { type: String, default: 'warning' },
    },
    components: {
        SkillsLists,
        LangsLists,
    },
    data() {
        return {
            t_key: 'skills.',
            current: 0,
            lang: [
                {
                    id: 0,
                    label: 'fr',
                    level: 'mother',
                },
                {
                    id: 1,
                    label: 'en',
                    level: 'c1',
                },
                {
                    id: 2,
                    label: 'de',
                    level: 'a2',
                },
            ],
            skills: [
                {
                    t_key: 'coding.',
                    id: 0,
                    icon: ['fad', 'code'],
                    values: [
                        {
                            id: 0,
                            label: 'PHP',
                            level: 65,
                            icon: ['fab', 'php'],
                            color: '#4f5b93',
                        },
                        {
                            id: 1,
                            label: 'Javascript',
                            level: 85,
                            icon: ['fab', 'js'],
                            color: '#f5c907',
                        },
                        {
                            id: 2,
                            label: 'Java',
                            level: 70,
                            icon: ['fab', 'java'],
                            color: '#f89820',
                        },
                        {
                            id: 3,
                            label: 'C#',
                            level: 85,
                            desc: true,
                        },
                        {
                            id: 4,
                            label: 'R',
                            level: 70,
                            icon: ['fab', 'r-project'],
                            color: '#165CAA ',
                            desc: true,
                        },    
                        {
                            id: 5,
                            label: 'SQL',
                            level: 70,
                            icon: ['fad', 'database'],
                            desc: true,
                        },      
                        {
                            id: 6,
                            label: 'Python',
                            level: 75,
                            icon: ['fab', 'python'],
                            color: '#4584b6',
                        },                                    
                    ],
                },
                {
                    t_key: 'frameworks.',
                    id: 1,  
                    icon: ['fad', 'cubes'],
                    values: [
                        {
                            id: 5,
                            label: 'NodeJs',
                            level: 80,
                            icon: ['fab', 'node-js'],
                            color: '#68A063',
                            desc: true,
                        },
                        {
                            id: 6,
                            label: 'Laravel',
                            level: 60,
                            icon: ['fab', 'laravel'],
                            color: '#f55247',
                        },
                        {
                            id: 7,
                            label: 'Yii 2',
                            level: 50,
                        },
                        {
                            id: 8,
                            label: 'VueJs',
                            level: 90,
                            icon: ['fab', 'vuejs'],
                            color: '#42b883',
                            desc: true,
                        },
                        {
                            id: 9,
                            label: 'ReactJs',
                            level: 65,
                            icon: ['fab', 'react'],
                            color: '#00d8ff',
                            desc: true,
                        },
                        {
                            id: 10,
                            label: 'Android Studio',
                            level: 65,
                            icon: ['fab', 'android'],
                            color: '#78C257',
                        },
                        {
                            id: 11,
                            label: 'Umbraco',
                            icon: ['fab', 'umbraco'],
                            color: '#0609c9',
                            level: 80,
                        },
                        {
                            id: 12,
                            label: 'Java EE',
                            level: 40,
                        },
                        {
                            id: 13,
                            label: 'WordPress',
                            level: 70,
                            icon: ['fab', 'wordpress'],
                            color: '#00749C',
                        },
                        {
                            id: 14,
                            label: 'Shopify',
                            level: 70,
                            icon: ['fab', 'shopify'],
                            color: '#64943E',
                            desc: true,
                        },
                        {
                            id: 14,
                            label: 'Django',
                            icon: ['fad', 'guitar'],
                            level: 75,
                        },
                    ]
                },
                {
                    t_key: 'other_techs.',
                    id: 2,  
                    icon: ['fad', 'object-group'],
                    values: [
                        {
                            id: 0,
                            label: 'User eXperience',
                            level: 75,
                            icon: ['fad', 'user-check'],
                            desc: true,
                        },
                        {
                            id: 1,
                            label: 'Database Design',
                            level: 70,
                            icon: ['fad', 'table'],
                        },
                        {
                            id: 2,
                            label: 'Data Scrambling',
                            level: 70,
                            icon: ['fad', 'dice-d6'],
                        },
                        {
                            id: 3,
                            label: 'Data Visualization',
                            level: 85,
                            icon: ['fad', 'chart-pie'],
                            desc: true,
                        },
                        {
                            id: 10,
                            label: 'No SQL',
                            icon: ['fad', 'sitemap'],
                            level: 70,
                        },
                        {
                            id: 4,
                            label: 'Server Management',
                            level: 60,
                            icon: ['fad', 'server'],
                            desc: true,
                        },
                        {
                            id: 5,
                            label: 'Project Management',
                            level: 75,
                            icon: ['fad', 'project-diagram'],
                            desc: true,
                        },
                        {
                            id: 6,
                            label: 'Continuous Integration',
                            level: 60,
                            icon: ['fab', 'jenkins'],
                        },
                        {
                            id: 7,
                            label: 'VCS (Git)',
                            level: 75,
                            icon: ['fad', 'code-branch'],
                        },
                        {
                            id: 8,
                            label: 'Test Driven Development',
                            level: 60,
                            icon: ['fad', 'flask'],
                        },
                        {
                            id: 9,
                            label: 'Unit Testing',
                            level: 60,
                            icon: ['fad', 'vials'],
                        },
                        {
                            id: 11,
                            label: 'GIS',
                            level: 70,
                            icon: ['fad', 'globe-stand'],
                            desc: true,
                        },
                        {
                            id: 12,
                            label: 'ETL',
                            level: 70,
                            icon: ['fad', 'dolly-flatbed-alt'],
                        },
                        {
                            id: 12,
                            label: 'Network',
                            level: 85,
                            icon: ['fad', 'router'],
                            desc: true,
                        },
                        {
                            id: 13,
                            label: 'N-Tier',
                            level: 85,
                            icon: ['fad', 'layer-group'],
                        },
                        {
                            id: 14,
                            label: 'Machine Learning',
                            level: 40,
                            icon: ['fad', 'computer-classic'],
                            desc: true,
                        },
                        {
                            id: 14,
                            label: 'SCRUM & Agility',
                            level: 85,
                            icon: ['fad', 'users'],
                        },
                    ]
                },
                {
                    t_key: 'soft_skills.',
                    id: 3,
                    icon: ['fad', 'transporter'],
                    values: [
                        {
                            id: 0,
                            label: 'selfdevelopment',
                            level: 90,
                            icon: ['fad', 'book-reader'],
                        },
                        {
                            id: 1,
                            label: 'positivecommunication',
                            level: 80,
                            icon: ['fad', 'comments'],
                        },
                        {
                            id: 2,
                            label: 'networking',
                            level: 65,
                            icon: ['fad', 'address-book'],
                        },
                        {
                            id: 3,
                            label: 'fastlearner',
                            level: 95,
                            icon: ['fad', 'rabbit-fast'],
                        },
                        {
                            id: 4,
                            label: 'teambuilding',
                            level: 70,
                            icon: ['fad', 'handshake-alt'],
                        },
                        {
                            id: 5,
                            label: 'skillshare',
                            level: 80,
                            icon: ['fad', 'mind-share'],
                        },
                        {
                            id: 6,
                            label: 'flexibility',
                            level: 95,
                            icon: ['fad', 'shapes'],
                        },
                    ]
                },
            ],
        }
    },
}
</script>