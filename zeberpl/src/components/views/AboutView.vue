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
        url: 'src/assets/stack/ilearn/react.svg',
        title: 'React.js'
    },
    {
        url: 'src/assets/stack/imfam/gatsby.svg',
        title: 'Gatsby.js'
    },
    {
        url: 'src/assets/stack/imfam/photoshop.svg',
        title: 'Adobe Photoshop'
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

const ilearn = [
    {
        url: 'src/assets/stack/ilearn/react.svg',
        title: 'React.js'
    },
    {
        url: 'src/assets/stack/imfam/gatsby.svg',
        title: 'Gatsby.js'
    },
    {
        url: 'src/assets/stack/ilearn/node.svg',
        title: 'Node.js'
    }
];

const iWant = [
    {
        url: 'src/assets/stack/iwant/docker.svg',
        title: 'Docker'
    },
    {
        url: 'src/assets/stack/iwant/firebase.svg',
        title: 'Firebase'
    },
    {
        url: 'src/assets/stack/iwant/gql.svg',
        title: 'GraphQL'
    },
    {

        url: 'src/assets/stack/iwant/laravel.svg',
        title: 'Laravel'
    },
    {
        url: 'src/assets/stack/iwant/pinia.svg',
        title: 'Pinia'
    },
    {
        url: 'src/assets/stack/iwant/webpack.svg',
        title: 'Webpack'
    }
];

</script>

<template>
    <div class="article-wrapper">
        <h1>Home</h1>
        <h2 class="title">About me</h2>
        <article class="article" >{{ aboutMe }}</article>
        <h2 class="title">(Not only) tech stack</h2>
        <div class="center">
            <div class="stack">
                <stack class="stack-item" :icons="iUse" :title="'I use'"/>
                <stack class="stack-item" :icons="iKnow" :title="'I am familiar with'"/>
                <stack class="stack-item" :icons="ilearn" :title="'I am learning'"/>
                <stack class="stack-item" :icons="iWant" :title="'I want to learn'"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 @use "../../assets/styles/ViewsStyle";

 .stack {
    display: block;

    &-item {
        margin: 35px 10px;
    }
 }

 .title {
    text-align: center;
 }

 .article {
    margin: 5px 5vw;
    font-size: 14px;
 }
 .center {
    display: flex;
    justify-content: center;
 }

 @media only screen and (min-width: 768px){
    .stack {
    display: flex;
    justify-content: center;
    }

    .article {
        font-size: 16px;
    }
 }
</style>
