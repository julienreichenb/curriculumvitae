<template>
    <b-container fluid class="pt-4 pb-5 text-left"> 
        <ExperiencesLists :list="experiences" :tkey="t_key" />
    </b-container>
</template>

<script>
import ExperiencesLists from '../utils/lists/ExperiencesLists'
export default {
    components: {
        ExperiencesLists,
    },
    props: {
        color: { type: String, default: 'Black' },
        bootstrap: { type: String, default: 'secondary' },
    },
    data() {
        return {
            t_key: 'experiences.',
            experiences: [
                {
                    id: 4,
                    t_key: 'hes.',
                    tasks: 4,
                    date: [new Date(2019, 8, 1), null],
                },
                {
                    id: 3,
                    t_key: 'mhavie.',
                    tasks: 4,
                    date: [new Date(2019, 5, 1), new Date(2020, 4, 31)],
                    desc: true,
                },
                {
                    id: 2,
                    t_key: 'hopital_sion.',
                    tasks: 3,
                    date: [new Date(2015, 0, 19), new Date(2016, 6, 31)],
                    desc: true,
                    pdf: true,
                },
                {
                    id: 1,
                    t_key: 'nouvelliste.',
                    tasks: 3,
                    date: [new Date(2014, 6, 1), new Date(2014, 6, 31)],
                },
                {
                    id: 0,
                    t_key: 'manor.',
                    tasks: 2,
                    date: [new Date(2012, 0, 1), new Date(2014, 4, 31)],
                    desc: true,
                },
            ]
        }
    },
}
</script>