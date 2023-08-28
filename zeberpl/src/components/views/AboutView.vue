<script setup>

import stack from '../stack.vue';

const aboutMe = `I am an aspiring Front-End developer for whom it is a priority to constantly expand my horizons.
                 I want to create websites that are aesthetically pleasing, functional and above all efficient.
                 Outside of hours I am interested in aviation, sociology, planning and geography in general.
                 In moments of inspiration I also play with vector graphics. Bad coffee is always better than
                 no coffee at all.`;

/* const iKnowIcons = [
    'src/assets/stack/iknow/bootstrap.svg',
    'src/assets/stack/iknow/sass.svg',
    'src/assets/stack/iknow/ts.svg',
    'src/assets/stack/iknow/vite.svg',
    'src/assets/stack/iknow/vue.svg',
]; */

const iKnowIcons = [
    {
        url: 'src/assets/stack/iknow/bootstrap.svg',
        title: 'Bootstrap'
    },
    {
        url: 'src/assets/stack/iknow/sass.svg',
        title: 'Sass'
    },
    {
        url: 'src/assets/stack/iknow/ts.svg',
        title: 'TypeScript'
    },
    {
        url: 'src/assets/stack/iknow/vue.svg',
        title: 'Vue.js'
    },
    {
        url: 'src/assets/stack/iknow/vite.svg',
        title: 'Vite'
    }
]

</script>

<template>
    <div class="article-wrapper">
        <h1>Home</h1>
        <h2>About me</h2>
        <p>{{ aboutMe }}</p>
        <h2>Tech stack</h2>
        <div class="stack">
            <stack :icons="iKnowIcons" :title="'I am familiar with'"/>  
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
