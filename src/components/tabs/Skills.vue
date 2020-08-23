<template>
    <b-container fluid class="pt-4 pb-5"> 
        <LangsLists :list="lang" :tkey="t_key" />
        <b-tabs id="education"
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
                <SkillsLists :list="skill.values" :tkey="skill.t_key" />
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
                    level: 'b1',
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
                        },
                        {
                            id: 1,
                            label: 'Javascript',
                            level: 45,
                            icon: ['fab', 'js'],
                        },
                        {
                            id: 2,
                            label: 'Java',
                            level: 5,
                            icon: ['fab', 'java'],
                        },
                        {
                            id: 3,
                            label: 'C#',
                            level: 85,
                        },
                        {
                            id: 4,
                            label: 'R',
                            level: 65,
                            icon: ['fab', 'r-project'],
                        },                                             
                    ],
                },
                {
                    t_key: 'frameworks.',
                    id: 1,  
                    icon: ['fad', 'cubes'],
                    values: [
                        {
                            id: 6,
                            label: 'Laravel',
                            level: 33,
                            icon: ['fab', 'laravel'],
                        },
                        {
                            id: 7,
                            label: 'Yii 2',
                            level: 33,
                        },
                        {
                            id: 8,
                            label: 'VueJs',
                            level: 33,
                            icon: ['fab', 'vuejs'],
                        },
                        {
                            id: 9,
                            label: 'ReactJs',
                            level: 33,
                            icon: ['fab', 'react'],
                        },
                        {
                            id: 10,
                            label: 'Android Studio',
                            level: 33,
                            icon: ['fab', 'android'],
                        },
                        {
                            id: 11,
                            label: 'Umbraco',
                            level: 33,
                        },
                        {
                            id: 10,
                            label: 'Java EE',
                            level: 33,
                        },
                    ]
                },
                {
                    t_key: 'other_techs.',
                    id: 2,  
                    icon: ['fad', 'object-group'],
                    values: [
                        {
                            id: 1,
                            label: 'SQL',
                            level: 33,
                            icon: ['fas', 'database'],
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
                            label: 'php',
                            level: 65,
                            icon: [],
                        },
                    ]
                },
            ],
        }
    },
}
</script>

<style lang="scss">

</style>