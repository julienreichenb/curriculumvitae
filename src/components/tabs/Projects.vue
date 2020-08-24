<template>
    <b-container fluid class="pt-4 pb-5 text-left">
        <h1 v-html="$t(t_key + 'title')" />
        <h4 class="mb-5 font-italic text-muted" v-html="$t(t_key + 'subtitle')" />
        <b-row 
            class="py-4 border-top project"
            v-for="p in projects" 
            :key="p.id"
        >
            <b-col lg="4" class="pr-5">
                <div class="d-flex justify-content-between">
                    <a v-if="p.url" :href="p.url" target="_blank">
                        <h3 class="font-weight-bold">
                            <span>{{ p.name }}</span>
                            <font-awesome-icon icon="link" class="ml-2" transform="shrink-7" />
                        </h3>
                    </a>
                    <h3 v-else class="font-weight-bold">{{ p.name }}</h3>
                    <DownloadIcon v-if="p.pdf" :item="p" :size="'2x'" />
                </div>
                <img v-if="p.img" :src="getImg(p)" />
            </b-col>
            <b-col class="pl-5" :lg="p.pdf ? '7' : '8'">
                <h5 class="font-weight-bold" v-html="$t(t_key + p.t_key + 'title')" />
                <h6 v-html="$t(t_key + p.t_key + 'desc')" />
                <div class="text-black mb-1 mt-5">
                    <span class="font-weight-bold mr-4">{{ $t(t_key + 'technologies') }}</span>
                    <span class="mr-2" v-for="t in p.tech" :key="t">{{ t }} </span> 
                </div>
                <div class="text-muted">
                    <span class="font-weight-bold mr-4">Keywords</span>
                    <span class="font-italic mr-2" v-for="t in p.tags" :key="t">{{ t }} </span> 
                </div>             
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import DownloadIcon from '../utils/DownloadIcon'
export default {
    components: {
        DownloadIcon,
    },
    props: {
        color: { type: String, default: 'SeaGreen' },
        bootstrap: { type: String, default: 'success' },
    },
    data() {
        return {
            t_key: 'projects.',
            projects: [
                {
                    id: 0,
                    name: 'Mhavie',
                    t_key: 'mhavie.',
                    tech: ['PHP', 'Laravel', 'VueJs'],
                    tags: ['Fullstack', 'IAT Lab', 'Disabled People', 'Privacy'],
                    img: '',
                },
                {
                    id: 4,
                    name: 'Observatoire du Tourisme',
                    t_key: 'tourobs.',
                    tech: ['C#', 'Umbraco', 'VueJs'],
                    tags: ['Tourism', 'Blogging', 'Website Redesign', 'CMS', 'Big Data', 'Data Visualizations'],
                    url: 'https://www.tourobs.ch/',
                    img: '',
                },
                {
                    id: 1,
                    name: 'Vasco',
                    t_key: 'vasco.',
                    tech: ['NodeJs', 'VueJs', 'Nuxt', 'Vuetify', 'Vega-Lite'],
                    tags: ['Fullstack', 'Semi-generated Charts', 'Data Visualization', 'Collaboration', 'Chart Annotation'],
                    url: 'http://vlhvasco.hevs.ch/',
                    img: '',
                },
                {
                    id: 5,
                    name: 'RADHY',
                    t_key: 'radhy.',
                    tech: ['VueJs', 'Adonisjs', 'PostgreSQL', 'Leaflet'],
                    tags: ['Water Management', 'Ecology', 'GIS', 'Fullstack', 'Data Visualization'],
                    url: 'http://vlhgislab.hevs.ch:8081/',
                    img: '',
                },
                {
                    id: 2,
                    name: 'diVoc',
                    t_key: 'divoc.',
                    tech: ['Android', 'Java'],
                    tags: ['Covid-19', 'Social Distanciation', 'Health', 'Mobile App', 'Gamification'],
                    img: '',
                },
                {
                    id: 3,
                    name: 'O-Point',
                    t_key: 'opoint.',
                    tech: ['PHP', 'Yii 2'],
                    tags: ['Bachelor Thesis', 'Disabled People', 'User eXperience', 'Disabled People', 'Inclusive Design'],
                    img: '',
                    pdf : true,
                },                                
            ]
        }
    },
    methods: {
        getImg(project) {
            console.log(project)
        }
    }
}
</script>

<style lang="scss">
.project strong {
    color: $success !important;
}
</style>