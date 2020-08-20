<template>
    <b-tabs class="bg-dark" 
        justified 
        v-model="current"
    >
        <b-tab class="bg-white" 
            v-for="tab in tabs" 
            :key="tab.id"
            v-on:click.prevent="goToContent"
        >
            <template v-slot:title>
                <h5 :class="current !== tab.id ? 'text-white' : 'text-dark font-weight-bold'">
                    <font-awesome-icon class="mr-3" 
                        :icon="tab.icon" 
                        :color="current === tab.id && tab.color"
                    />
                    {{ $t('tab.' + tab.label) }}
                </h5>
            </template>
            <div id="content">
                <PersonalInfos :color="tabs[current].color" v-if="current === 0" />
                <Education :color="tabs[current].color" v-else-if="current === 1" />
                <Experience :color="tabs[current].color" v-else-if="current === 2" />
                <Skills :color="tabs[current].color" v-else-if="current === 3" />
                <Projects :color="tabs[current].color" v-else-if="current === 4" />
                <Interests :color="tabs[current].color" v-else-if="current === 5" />
            </div>
        </b-tab>
    </b-tabs>
</template>

<script>
import PersonalInfos from '../tabs/PersonalInfos'
import Education from '../tabs/Education'
import Experience from '../tabs/Experience'
import Skills from '../tabs/Skills'
import Projects from '../tabs/Projects'
import Interests from '../tabs/Interests'
export default {
    components: {
        PersonalInfos,
        Education,
        Experience,
        Skills,
        Projects,
        Interests
    },
    data() {
        return {
            current: null,
            tabs: [
                {
                    id: 0,
                    label: 'personal_info',
                    icon: ['fad', 'user'],
                    color: 'Maroon',
                },
                {
                    id: 1,
                    label: 'education',
                    icon: ['fad', 'user-graduate'],
                    color: 'Black',
                },
                {
                    id: 2,
                    label: 'experience',
                    icon: ['fad', 'tools'],
                    color: 'Indigo',
                },
                {
                    id: 3,
                    label: 'skills',
                    icon: ['fad', 'tachometer-alt-fast'],
                    color: 'Chocolate',
                },
                {
                    id: 4,
                    label: 'projects',
                    icon: ['fad', 'browser'],
                    color: 'SeaGreen',
                },
                {
                    id: 5,
                    label: 'interests',
                    icon: ['fad', 'gamepad-alt'],
                    color: 'Navy',
                }
            ]
        }
    },
    methods: {
        goToContent() {
            document.getElementById("content").scrollIntoView();
        }
    },
}
</script>

<style lang="scss" scoped>
</style>