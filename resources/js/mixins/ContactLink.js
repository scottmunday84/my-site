export default {
    computed: {
        contactLink() {
            let emailAddressDomain = 'sitesbymunday.com';
            let emailAddress = `support@${emailAddressDomain}`;

            return `mailto:${emailAddress}`;
        }
    }
}
