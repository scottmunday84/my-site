<template>
    <b-container>
        <b-row>
            <b-row>
                <h1>Let</h1>
                <h1>me be</h1>
                <h1>your</h1>
            </b-row>
            <b-row class="console py-2">
                <b-col class="col-3">
                    root&gt;
                </b-col>
                <b-col class="col-9">
                    <banner-carousel />
                </b-col>
            </b-row>
            <b-row>
                <h1>Nerd.</h1>
            </b-row>
            <b-row class="pt-5">
                <img :src="manAtDesk" />
            </b-row>
        </b-row>
    </b-container>
</template>

<script>
import BannerCarousel from './BannerCarousel';
import manAtDesk from './man-at-desk.png';

export default {
    components: {
        BannerCarousel
    },
    data: function() {
        return {
            manAtDesk
        };
    }
};
</script>

<style scoped lang="scss">
.container {
    text-transform: uppercase;
    text-align: left;

    .console {
        color: #6e6e6e;
        font-family: monospace;
        font-size: 32px;
        text-transform: none;
    }
}
</style>
