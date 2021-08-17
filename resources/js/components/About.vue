<template>
    <div class="container">
        <h2>About Me</h2>
        <p>
            I am a software developer with a passion for all technology. With 20+ years of experience on multiple
            programming languages, databases, and practices, I've seen my share of work, but always remained humble. IT
            can be difficult, and I help to coach my clients through their best options. Let me help develop your IT
            software solutions at a reasonable price. Contact me <a :href="contactLink">here</a> for a quote!
        </p>
    </div>
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
