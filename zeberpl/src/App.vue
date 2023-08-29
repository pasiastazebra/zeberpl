<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <div class="bg-icons">
      <img class="floating-icon position-1" src="./assets/bgicons/keyboard.svg" alt="Floating keyboard icon">
      <img class="floating-icon position-2" src="./assets/bgicons/monitor.svg" alt="Floating monitor icon">
      <img class="floating-icon position-3" src="./assets/bgicons/mouse.svg" alt="Floating mouse icon">
    </div>
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
      
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in"> 
          <component :is="Component" />
        </transition>
      </RouterView>
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

  contain: paint; // <<-- Preventing animations to extend the website height

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
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
}

.logo {
  margin: -40px 20px;
  
}

.footer {
  position: absolute;

  background-color: #00000025;
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);

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

//floating icon style and animation

.floating-icon {
  width: 100px;

  position: absolute;

  top: -20%;
}

.position {
  &-1 {
    right: 10%;

    animation: animOne 3s linear infinite;
  }
  &-2 {
    right: 40%;

    animation: animTwo 2.5s linear infinite;
  }
  &-3 {
    right: 80%;

    animation: animThree 3.2s linear infinite;
  }
}

@keyframes animOne {
  from {
    transform: translateY(-20vh) translateX(-10vw) rotate(0);
  } to {
    transform: translateY(150vh) translateX(-30vw) rotate(170deg);
  }
}

@keyframes animTwo {
  from {
    transform: translateY(-20vh) translateX(10vw) rotate(10deg);
  } to {
    transform: translateY(150vh) translateX(35vw) rotate(220deg);
  }
}

@keyframes animThree {
  from {
    transform: translateY(-20vh) translateX(30vw) rotate(15deg);
  } to {
    transform: translateY(150vh) translateX(-20vw) rotate(150deg);
  }
}

//view transition style

.fade {
  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: opacity 0.3s ease-out;
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
