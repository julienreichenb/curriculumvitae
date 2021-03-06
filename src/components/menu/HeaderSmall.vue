<template>
   <b-navbar id="small-header" 
        class="bg-white" 
        sticky
    >
    <b-navbar-brand class="mr-5" v-on:click="scrollTop">
        <img :src="pic" alt="me" width="70" />
    </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav 
            class="mx-3 mx-md-2 small-nav"
            v-for="info in infos" 
            :key="info.id"
        >
            <b-nav-item :href="info.isMail && 'mailto:' + info.value[0]" 
                :class="info.isMail ? 'hoverable' : 'not-hoverable'" 
            >
                <font-awesome-icon
                    class="fa-2x mr-2"
                    :class="'text-' + color"
                    :icon="info.icon"
                />                 
                <span :class="'text-' + color" class="font-weight-bold">
                    {{ info.value && (info.t ? $t(t_key + info.value[0]) : info.value[0]) }}
                </span>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown class="ml-3" right>
                <template slot="button-content">
                    <font-awesome-icon
                        class="fa-2x" 
                        :class="'text-' + color"
                        :icon="['fad', 'globe']"
                    />
                </template>
                <b-dropdown-item 
                    v-for="(lang, i) in $i18n.availableLocales" 
                    :key="`Lang${i}`"
                    @click.prevent="setLocale(lang)"
                >
                    <img :src="pics[i]" width="25" />
                    {{ $t(t_key + 'lang.' + lang) }}
                </b-dropdown-item>
            </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Pic from '@/assets/img/me.png'
import FR from '@/assets/img/lang/fr.png'
import EN from '@/assets/img/lang/en.png'
export default {
    props: {
        color: { type: String, default: 'danger' },
        infos: { type: Array, required: true },
    },
    data() {
        return {
            t_key: 'header.',
            pic: null,
            pics: [null, null],                   
        }
    },
    mounted() {
        this.pic = Pic
        this.pics[1] = FR
        this.pics[0] = EN
    },
    methods: {
        scrollTop() {
            window.scrollTo(0,0)
        },       
        setLocale(lang) {
            this.$i18n.locale = lang;
            this.$router.push({
                params: { lang }
        });
    }
    }
}
</script>

<style lang="scss" scoped>
#small-header {
    padding: .7rem 2rem;

    img {
        border-radius: 100px;
        border: 1px solid transparent;
        padding: 2px;
        transition: .2s;
    }

    img:hover {
        border: 1px solid rgba(0, 0, 0, 0.486);
    }

    ::placeholder {
        font-size: .75em;
    }

    a {
        border-radius: 10px;
    }

    .hoverable:hover {
        background: $txt-color;

        * {
            color: $light !important;
        }
    }

    .small-nav {
        font-size: .9rem;
    }

    .not-hoverable * {
        cursor: default;
    }

    @include media-breakpoint-down(lg) {
        padding: .7rem 1.5rem;

        .small-nav {
            font-size: .7rem !important;
        }
    }
    
    @include media-breakpoint-down(md) {
        .small-nav {
            display: none !important;
        }
    }
}
</style>