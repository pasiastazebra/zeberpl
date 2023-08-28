<script setup>

import stack from '../stack.vue';

const aboutMe = `I am an aspiring Front-End developer for whom it is a priority to constantly expand my horizons.
                 I want to create websites that are aesthetically pleasing, functional and above all efficient.
                 Outside of hours I am interested in aviation, sociology, planning and geography in general.
                 In moments of inspiration I also play with vector graphics. Bad coffee is always better than
                 no coffee at all.`;

const iUse = [
    {
        url: 'src/assets/stack/iknow/bootstrap.svg',
        title: 'Bootstrap'
    },
    {
        url: 'src/assets/stack/iknow/illustrator.svg',
        title: 'Adobe Illustrator'
    },
    {
        url: 'src/assets/stack/iknow/ts.svg',
        title: 'TypeScript'
    },
    {

        url: 'src/assets/stack/iknow/sass.svg',
        title: 'Sass'
    },
    {
        url: 'src/assets/stack/iknow/vite.svg',
        title: 'Vite'
    },
    {
        url: 'src/assets/stack/iknow/vue.svg',
        title: 'Vue.js'
    }
];

const iKnow = [
    {
        url: 'src/assets/stack/imfam/photoshop.svg',
        title: 'Adobe Photoshop'
    },
    {
        url: 'src/assets/stack/imfam/gatsby.svg',
        title: 'Gatsby.js'
    },
    {
        url: 'src/assets/stack/imfam/sql.svg',
        title: 'MySQL'
    },
    {
        url: 'src/assets/stack/imfam/php.svg',
        title: 'PHP'
    },
    {
        url: 'src/assets/stack/imfam/tailwind.svg',
        title: 'Tailwind CSS'
    }
];

</script>

<template>
    <div class="article-wrapper">
        <h1>Home</h1>
        <h2>About me</h2>
        <p>{{ aboutMe }}</p>
        <h2>(Not only) tech stack</h2>
        <div class="stack">
            <stack :icons="iUse" :title="'I use'"/>
            <stack :icons="iKnow" :title="'I am familiar with'"/> 
        </div>
    </div>
</template>

<style scoped lang="scss">
 @use "../../assets/ViewsStyle";

 .stack {
    display: grid;
    grid-template-columns: 15vw 15vw 15vw;
 }
</style>
