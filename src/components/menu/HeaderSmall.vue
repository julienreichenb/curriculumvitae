<template>
   <b-navbar id="small-header" 
        class="bg-white" 
        sticky
        toggleable="lg"
    >
    <b-navbar-brand class="mr-5" v-on:click="scrollTop">
        <img :src="pic" alt="me" width="70" />
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav 
            class="mx-3"
            v-for="info in infos" 
            :key="info.id"
        >
            <b-nav-text v-if="!info.isMail" :class="'text-' + color" class="font-weight-bold">
                <font-awesome-icon
                    class="fa-2x mr-3"
                    :icon="info.icon"
                />
                <span>{{ info.value[0] }}</span>
            </b-nav-text>
            <b-nav-item v-if="info.isMail" :href="'mailto:' + info.value[0]">
                <font-awesome-icon
                    class="fa-2x mr-3"
                    :class="'text-' + color"
                    :icon="info.icon"
                />
                <span :class="'text-' + color" class="font-weight-bold">
                    {{ info.value[0] }}
                </span>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input 
                    class="mr-sm-2" 
                    v-model="searchedWord"
                    :placeholder="$t(t_key + 'search_placeholder') + getRandomTxt()" 
                />
                <b-button :variant="'outline-' + color" @click="search">
                    {{ $t(t_key + 'search_btn') }}
                </b-button>
            </b-nav-form>
            <b-nav-item-dropdown class="ml-3" right>
                <template slot="button-content">
                    <font-awesome-icon
                        class="fa-2x" 
                        :class="'text-' + color"
                        :icon="['fad', 'globe']"
                    />
                </template>
                <b-dropdown-item href="#">
                    <img :src="frPic" width="25" />
                    {{ $t(t_key + 'lang.fr') }}
                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <img :src="enPic" width="25" />
                    {{ $t(t_key + 'lang.en') }}
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
            frPic: null,
            enPic: null,
            labels: [
                "skill", 
                "comp", 
                "talent", 
                "contact",  
                "experience", 
                "achievement",
                "diploma",
            ],
            searchedWord: null,
        }
    },
    mounted() {
        this.pic = Pic
        this.frPic = FR
        this.enPic = EN
    },
    methods: {
        scrollTop() {
            window.scrollTo(0,0)
        },
        getRandomTxt() {
            const r = Math.floor(Math.random() * (this.labels.length)); 
            return this.$t(this.t_key + 'rand.' + this.labels[r])
        },
        search() {
            console.log(this.searchedWord)
        },
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

    a:hover {
        background: $txt-color;

        * {
            color: $light !important;
        }
    }
}
</style>