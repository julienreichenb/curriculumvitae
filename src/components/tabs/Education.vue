<template>
    <b-container fluid class="pt-4 pb-5 text-left">
        <b-tabs id="education"
            :vertical="!isMobile"
            v-model="current"
            :active-nav-item-class="'text-bold text-white bg-' + bootstrap"
        >
            <b-tab class="px-5">
                <template v-slot:title>
                    <div class="d-flex justify-content-between align-items-center p-2">
                        <div>
                            <font-awesome-icon 
                                class="mr-2"
                                :icon="['fad', 'graduation-cap']"
                            />
                            {{ $t(t_key + 'diploms') }}                        
                        </div>
                       <b-badge pill
                            :variant="current === 0 ? 'light' : bootstrap" 
                            class="mx-3"
                        >
                            {{ diplomas.length }}
                        </b-badge>
                    </div>
                </template>
                <DiplomsLists :class="isMobile && 'mt-5'" :list="diplomas" :tkey="t_key" :isMobile="isMobile" />
            </b-tab>
            <b-tab class="px-5">
                <template v-slot:title>
                    <div class="d-flex justify-content-between align-items-center p-2">
                        <div>
                            <font-awesome-icon 
                                class="mr-2"
                                :icon="['fad', 'laptop-code']"
                            />
                            {{ $t(t_key + 'udemy') }}
                        </div>
                       <b-badge pill 
                            :variant="current === 1 ? 'light' : bootstrap" 
                            class="mx-3"
                        >
                            {{ udemy.length }}
                        </b-badge>
                    </div>
                </template>
                <UdemyLists :class="isMobile && 'mt-5'" :list="udemy" :tkey="t_key" :isMobile="isMobile" />
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
import DiplomsLists from '../utils/lists/DipliomsLists'
import UdemyLists from '../utils/lists/UdemyLists'
export default {
    components: {
        DiplomsLists,
        UdemyLists,
    },
    props: {
        color: { type: String, default: 'Black' },
        bootstrap: { type: String, default: 'secondary' },
    },
    data() {
        return {
            t_key: 'education.',
            isMobile: false,
            current: 0,
            diplomas: [
                {
                    id: 3,
                    t_key: "master.",
                    date: "2021",
                    over: false,
                },
                {
                    id: 2,
                    t_key: "bachelor.",
                    date: "2019",
                    pdf: true,
                    over: true,
                },
                {
                    id: 1,
                    t_key: "cisco.",
                    date: "2018",
                    pdf: true,
                    over: true,
                },
                {
                    id: 0,
                    t_key: "maturity.",
                    date: "2011",
                    over: true,
                }, 
            ],
            udemy: [
                {
                    id: 0,
                    t_key: "vue_php.",
                    url: "https://www.udemy.com/course/laravel-vuejs-fullstack-web-development/",
                    icon: ['fab', 'vuejs'],
                    color: '#42b883',
                },
                {
                    id: 1,
                    t_key: "django_python.",
                    url: "https://www.udemy.com/course/django-2-python-maitrisez-le-developpement-web/",
                    icon: ['fab', 'python'],
                    color: "#4584b6",
                },
                {
                    id: 2,
                    t_key: "r.",
                    url: "https://www.udemy.com/course/datascience-r/",
                    icon: ['fab', 'r-project'],
                    color: "#165CAA",
                },
                {
                    id: 3,
                    t_key: "react.",
                    url: "https://www.udemy.com/course/react-2020-par-la-pratique-de-a-a-z-evolution-progressive/",
                    icon: ['fab', 'react'],
                    color: "#00d8ff",
                }, 
                {
                    id: 4,
                    t_key: "yii.",
                    url: "https://www.udemy.com/course/learning-path-yii-2-design-applications-with-php/",
                    icon: ['fab', 'php'],
                    color: "#4f5b93",
                }, 
            ]
        }
    },
    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
        onResize () {
            this.isMobile = window.innerWidth < 1400
        }
    },
}
</script>