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
                                      'Simply tool to generate a random password matching user-defined properties.',
                                      'https://github.com/pasiastazebra/password-generator',
                                      'https://pasiastazebra.github.io/password-generator/' );


</script>

<template>
    <div class="article-wrapper">
        <h1>Projects</h1>
        <project :project="passwordGenerator" />
   </div>
</template>

<style scoped lang="scss">
 @use "../../assets/ViewsStyle";
</style>
