<script setup>
import contact from '../contact.vue';

const siteText = 'Feel free to reach me there!'

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
        <div class="inside-wrapper">
            <h1 class="text">Contact</h1>
            <p class="text">{{ siteText }}</p>
            <div class="center">
                <div class="contact-wrapper">
                    <contact class="item" :contact="linkedIn"/>
                    <contact class="item" :contact="twitter" />
                    <contact class="item" :contact="gitHub" />
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 @use "../../assets/styles/ViewsStyle";

 .inside-wrapper {
    margin-top: 10vh;
 }

 .contact-wrapper {
    display: block;
 }

 .text {
    text-align: center;
 }

 .center {
    display: flex;
    justify-content: center;
 }

 .item {
    margin: 20px
 }

 h1 {
    font-size: 40px;
    margin-bottom: 1px;
 }

 p {
    font-size: 18px;
 }

 @media only screen and (min-width: 950px) {
    .contact-wrapper {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    }

    .item {
        margin: auto;
    }
 }
</style>
