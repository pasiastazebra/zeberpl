<script setup>
import project from '../project.vue';

function Project (title, img, desc, srcUrl, demoUrl) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.srcUrl = srcUrl;
    this.demoUrl = demoUrl;
}

const passwordGenerator = new Project('Password generator', 
                                      'src/assets/projects/password.png',
                                      'Simple tool to generate a random password matching user-defined properties.',
                                      'https://github.com/pasiastazebra/password-generator',
                                      'https://pasiastazebra.github.io/password-generator' );

const spendingCalc = new Project('Spendings calculator', 
                              'src/assets/projects/spendings.png',
                              'Simple spendings calculator made in vanilla JS. It uses local storage to store data and ExcelJS to export it to downloadable spreadsheet.',
                              'https://github.com/pasiastazebra/spendingcalculator',
                              'https://pasiastazebra.github.io/spendingcalculator/' );

const currencyExchange = new Project('Currency exchange calculator', 
                              'src/assets/projects/exchange.png',
                              'Very simple exchange rate calculator, which uses API to get current data.',
                              'https://github.com/pasiastazebra/spendingcalculator',
                              'https://pasiastazebra.github.io/spendingcalculator/' );


</script>

<template>
    <div class="article-wrapper">
        <h1>Projects</h1>
        <div class="projects">
            <project :project="passwordGenerator" />
            <project :project="spendingCalc" />
            <project :project="currencyExchange" />
        </div>

   </div>
</template>

<style scoped lang="scss">
 @use "../../assets/styles/ViewsStyle";

 .projects {
    display: block;
 }

 @media only screen and (min-width: 768px){
    .projects {
    display: flex;
    justify-content: center;
    }
 }
</style>
