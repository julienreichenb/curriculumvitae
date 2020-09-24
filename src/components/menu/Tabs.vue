<template>
    <b-tabs id="tabs"
        class="bg-white" 
        justified 
        v-model="current"
    >
        <b-tab 
            v-for="tab in tabs" 
            :key="tab.id"
            v-on:click="clickTab(tab.bootstrap)"
        >
            <template v-slot:title>
                <h5
                    :class="getTitleClass(tab)"
                >
                    <font-awesome-icon class="mr-3" 
                        :icon="tab.icon"
                    />
                    {{ $t('tab.' + tab.label) }}
                </h5>
            </template>
            <div class="content">                
                <PersonalInfos :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-if="current === 0" />
                <Education :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-else-if="current === 1" />
                <Experience :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-else-if="current === 2" />
                <Skills :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-else-if="current === 3" />
                <Projects :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-else-if="current === 4" />
                <Interests :color="tabs[current].color" :bootstrap="tabs[current].bootstrap" v-else-if="current === 5" />
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
    mounted() {
        this.swapColor('danger')
    },
    data() {
        return {
            current: 0,
            tabs: [
                {
                    id: 0,
                    label: 'personal_info',
                    icon: ['fad', 'user'],
                    color: 'Maroon',
                    bootstrap: 'danger',
                },
                {
                    id: 1,
                    label: 'education',
                    icon: ['fad', 'file-certificate'],
                    color: 'Black',
                    bootstrap: 'secondary',
                },
                {
                    id: 2,
                    label: 'experience',
                    icon: ['fad', 'tools'],
                    color: 'Indigo',
                    bootstrap: 'primary',
                },
                {
                    id: 3,
                    label: 'skills',
                    icon: ['fad', 'tachometer-alt-fast'],
                    color: 'Chocolate',
                    bootstrap: 'warning',
                },
                {
                    id: 4,
                    label: 'projects',
                    icon: ['fad', 'browser'],
                    color: 'SeaGreen',
                    bootstrap: 'success',
                },
                {
                    id: 5,
                    label: 'interests',
                    icon: ['fad', 'gamepad-alt'],
                    color: 'Navy',
                    bootstrap: 'dark',
                }
            ]
        }
    },
    methods: {
        clickTab(bootstrap) {
            this.swapColor(bootstrap)
            setTimeout(() => {
                this.goTo('small-header')
            }, 400)
        },
        getTitleClass(tab) {
            if(tab.id === this.current)
                return 'font-weight-bold text-' + tab.bootstrap
            else
                return 'text-' + tab.bootstrap
        },
        swapColor(bootstrap) {
            this.$emit('change', bootstrap)
        },
        goTo(id) {
            this.$emit('goto', id)
        }
    },
}
</script>

<style scoped lang="scss">
a.active * {
    font-weight: bolder;
}
.content {
    padding: 2em 7rem;
    min-height: 85vh;

    @include media-breakpoint-down(lg) {
        padding: 2em 4rem;
    }

    @include media-breakpoint-down(md) {
        padding: 1.8em 3rem;
    }

    @include media-breakpoint-down(sm) {
        padding: 1em 1.5rem;
    }
}

@include media-breakpoint-down(lg) {
    h5 {
        font-size: 1rem;
    }
}

@include media-breakpoint-down(md) {
    h5 {
        font-size: 1rem;
    }
}

@include media-breakpoint-down(sm) {
    h5 {
        font-size: 1rem;
    }
}
</style>