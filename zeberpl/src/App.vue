<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="wrapper header">
    <div class="inner-header">
      <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="wrapper footer">
    <p class="wrapper-text">This site is open source! Feel free to check the code
      <a href="https://github.com/pasiastazebra/zeberpl">there!</a>
    </p>
  </footer>
</template>

<style lang="scss">
@use './assets/variables' as var;

@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

//navbar and footer styles
.wrapper {
  //background-color: $bgsecondary;
  margin: 0%;
  text-align: right;
  width: 100%;
}

.header {
  position: sticky;
  top: 0;
  height: 70px;
}

.logo {
  margin: -40px 20px;
}

.footer {
  position: absolute;
  background-color: #00000025;
  text-align: center;
  bottom: 0px;

  p {
    font-size: 12px;
  }

  a {
    display: inline-block;
    padding: 0 2px;
    font-size: 13px;
    text-decoration: none;
    color: darken($color: var.$text, $amount: 3%);
    transition: 0.3s;
    &:hover {
      font-size: 15px;
      color: darken($color: var.$text, $amount: 10%);
    }
  }
}
.logo {
  float: left;
}
nav {
  margin-right: 35px;
  
  a {
    display: inline-block;
    padding: 0 25px;
    font-size: 20px;
    text-decoration: none;
    color: var.$text;
    transition: 0.3s;

    &.router-link-exact-active {
      color: darken($color: var.$text, $amount: 20%);
    }

    &:hover {
      color: darken($color: var.$text, $amount: 10%);
    }
  }

}

//global styles

body {
  font-family: 'Sarabun', sans-serif;
  background-color: var.$background;
  margin: 0%;
  padding-top: 0%;
  padding-bottom: 0%;
}

h1, h2, h3 {
  color: var.$text;
}

p {
  color: var.$text;
}

</style>
