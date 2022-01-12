<template>
    <b-container>
        <b-row>
            <h1 class="mb-3">About Me</h1>
            <div class="p-3">
                I am a software developer with a passion for technology. With over 20 years in software,
                I've seen my fair share of work. I understand that IT can be difficult, so I help my clients navigate
                their best options. Let me help develop your next software at a reasonable price.
            </div>
            <h4 class="p-3">
                <a :href="contactLink">
                    Contact me for your FREE quote!!
                </a>
            </h4>
        </b-row>
    </b-container>
</template>
<script>
import ContactLinkMixin from '../mixins/ContactLink';

export default {
    mixins: [
        ContactLinkMixin
    ]
};
</script>
