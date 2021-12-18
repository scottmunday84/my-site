<template>
    <b-container fluid>
        <b-row>
            <b-col class="col-sm-1 sidebar d-none d-xl-block"></b-col>
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

export default {
  name: 'App',
  components: {
      About,
      Banner,
      Skills,
      MyFooter
  }
}
</script>

