<template>
    <b-container>
        <b-row>
            <b-row>
                <h1>Let</h1>
                <h1>me be</h1>
                <h1>your</h1>
            </b-row>
            <b-row class="console py-2">
                <b-col>
                    <banner-carousel />
                </b-col>
            </b-row>
            <b-row>
                <h1>Nerd.</h1>
            </b-row>
            <b-row class="pt-3">
                <img :src="manAtDesk" />
            </b-row>
        </b-row>
    </b-container>
</template>

<script>
import BannerCarousel from './BannerCarousel';
import manAtDesk from './man-at-desk.svg';

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

<style lang="scss" scoped>
.container {
    text-transform: uppercase;
    text-align: left;

    .console {
        color: #6e6e6e;
        font-family: monospace;
        font-size: 28px;
        text-transform: none;
    }
}
</style>
