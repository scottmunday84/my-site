export default {
    computed: {
        contactLink() {
            let emailAddressDomain = 'sitesbymunday.com';
            let emailAddress = `support@${emailAddressDomain}`;
            let encodedSubject = encodeURIComponent('NOTICE: Quote Request');
            let encodedBody = encodeURIComponent('Replace me with a description of what I can help you with.');

            return `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
        }
    }
}
