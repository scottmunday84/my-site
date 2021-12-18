<template>
    <b-container fluid>
        <b-row>
            <b-col class="col-1 sidebar"></b-col>
            <b-col>
                <b-container class="px-4 py-5" fluid>
                    <b-row>
                        <b-col class="col-4">
                            <banner />
                        </b-col>
                        <b-col>
                            <about />
                            <skills />
                        </b-col>
                    </b-row>
                    <b-row>
                        <my-footer />
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

