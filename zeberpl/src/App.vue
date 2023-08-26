<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
    <div class="wrapper">
      <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>This site is open source! Feel free to check the code</p>
    <a href="https://github.com/pasiastazebra/zeberpl">there!</a>
  </footer>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

//color variables

$bgprimary: #19376D;
$bgsecondary: #0B2447;
$title: #576CBC;
$text: #A5D7E8;

//navbar styles

//global styles

body {
  font-family: 'Sarabun', sans-serif;
  background-color: $bgprimary;
}

h1, h2, h3 {
  color: $title;
}

p {
  color: $text;
}

</style>
