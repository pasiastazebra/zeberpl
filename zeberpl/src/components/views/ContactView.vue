<script setup>
import contact from '../contact.vue';

const linkedIn = {
    url: 'https://www.linkedin.com/in/konrad-semik-9a4206228/',
    img: 'src/assets/contact/linkedin.svg',
    alt: 'LinkedIn logo',
    value: 'Konrad Semik'
}

const twitter = {
    url: 'https://twitter.com/BycmozeKonrad',
    img: 'src/assets/contact/twitter.svg',
    alt: 'Twitter logo',
    value: 'Konrad'
}

const gitHub = {
    url: 'https://github.com/pasiastazebra',
    img: 'src/assets/contact/github.svg',
    alt: 'GitHub logo',
    value: 'pasiastazebra'
}

</script>

<template>
    <div class="article-wrapper">
        <h1>Contact</h1>
        <div class="contact-wrapper">
        <contact :contact="linkedIn"/>
        <contact :contact="twitter" />
        <contact :contact="gitHub" />
        </div> 
    </div>
</template>

<style scoped lang="scss">
 @use "../../assets/ViewsStyle";

 .contact-wrapper {
    display: grid;
    grid-template-columns: 30% 30% 30%;
 }
</style>
