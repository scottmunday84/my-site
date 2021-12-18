<template>
    <footer class="text-center text-lg-start">
        <div class="text-center p-3">
            &copy; 2021 Sites by Munday, LLC. All rights reserved.
        </div>
        <div class="text-center">
            <a :href="contactLink"><b-icon icon="envelope"></b-icon></a>
        </div>
    </footer>
</template>
<script>
export default {
    computed: {
        contactLink() {
            let emailAddressDomain = 'sitesbymunday.com';
            let emailAddress = `support@${emailAddressDomain}`;

            return `mailto:${emailAddress}`;
        }
    }
};
</script>
