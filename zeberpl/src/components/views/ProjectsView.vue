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

const loginDemo = new Project('Log In form demo', 
                              'src/assets/projects/login.png',
                              'Simple Font-End only demo of a log in form. Currently missing browser-side authentication.',
                              'https://github.com/pasiastazebra/password-generator',
                              'https://pasiastazebra.github.io/login-form-demo' );


</script>

<template>
    <div class="article-wrapper">
        <h1>Projects</h1>
        <div class="projects">
            <project :project="passwordGenerator" />
            <project :project="loginDemo" />
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
