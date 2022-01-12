<template>
    <b-container fluid>
        <b-row>
            <aside class="col-sm-1 d-none d-lg-block sidebar" style="max-width: 83.9063px">
                <div class="menu">
                    <a href="https://sitesbymunday.com" alt="Home">
                        <b-icon icon="house-fill"></b-icon>
                    </a>
                    <a :href="contactLink" alt="Contact me for a free quote!">
                        <b-icon icon="envelope-fill"></b-icon>
                    </a>
                </div>
            </aside>
            <b-col class="col-sm-1 d-none d-lg-block" style="max-width: 83.9063px"></b-col>
            <b-col>
                <b-container class="px-4 py-5" fluid>
                    <b-row>
                        <b-col class="col-sm-6 col-xl-4 d-none d-sm-block">
                            <banner />
                        </b-col>
                        <b-col>
                            <about />
                            <skills />
                            <my-footer />
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
import Banner from './components/Banner.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import MyFooter from './components/Footer.vue';
import ContactLinkMixin from './mixins/ContactLink';

export default {
    name: 'App',
    components: {
      About,
      Banner,
      Skills,
      MyFooter
    },
    mixins: [
        ContactLinkMixin
    ]
}
</script>

