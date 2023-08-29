<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <div class="page-container">
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
    </div>
    
    <footer class="wrapper footer">
      <p class="wrapper-text">This site is open source! Feel free to check the code
        <a href="https://github.com/pasiastazebra/zeberpl">there!</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
@use './assets/variables' as var;

@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

//navbar and footer styles
.page {
  position: relative;
  min-height: 100vh;

  &-container {
    padding-bottom: 2.5rem;
  }
}

.wrapper {
  //background-color: $bgsecondary;
  margin: 0%;
  text-align: right;
  width: 100%;
}

.header {
  position: sticky;
  top: 0;
  height: 50px;

  padding-top: 15px;

  z-index: 99;

  background-color: #00000079;
}

.logo {
  margin: -40px 20px;
  
}

.footer {
  position: absolute;
  background-color: #00000025;
  text-align: center;
  bottom: 0px;
  height: 2.5rem;

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
    padding: 2px 25px;
    font-size: 20px;
    text-decoration: none;
    color: var.$text;
    transition: 0.2s;

    &.router-link-exact-active {
      color: darken($color: var.$text, $amount: 20%);
      background: #2b58e936;
      border-radius: 25px;
    }

    &:hover {
      color: darken($color: var.$text, $amount: 10%);
      background: #2b57e90c;
      border-radius: 25px;
    }
  }

}

//global styles

body {
  font-family: 'Sarabun', sans-serif;
  background: linear-gradient(225deg,var.$background 0%, var.$background-shade 100%);
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


  * {
    scrollbar-width: none;
    scrollbar-color: var.$background-shade var.$background;
  }

  *::-webkit-scrollbar {
    width: 13px;
  }

  *::-webkit-scrollbar-track {
    background: var.$background-shade;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var.$background;
    border-radius: 7px;
  }

</style>
