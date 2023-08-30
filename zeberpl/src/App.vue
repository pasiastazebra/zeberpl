<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>

<template>
  <div class="page">
    <div class="bg-icons">
      <img class="floating-icon position-1" src="./assets/bgicons/keyboard.svg" alt="Floating keyboard icon">
      <img class="floating-icon position-2" src="./assets/bgicons/monitor.svg" alt="Floating monitor icon">
      <img class="floating-icon position-3" src="./assets/bgicons/mouse.svg" alt="Floating mouse icon">
    </div>
    <div class="page-container">
      <header class="wrapper header" :class="{ 'mobile-menu-header': isMobileMenuOpen }">
          <button class="header-hamburger" @click="toggleMobileMenu" :class="{ 'mobile-menu': isMobileMenuOpen }">
            <span class="header-hamburger-box">
              <span class="header-hamburger-box-inner"></span>
            </span>
          </button>
          <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
          <nav class="navbar" :class="{ 'mobile-nav': isMobileMenuOpen} ">
            <RouterLink class="navbar-link" to="/">Home</RouterLink>
            <RouterLink class="navbar-link" to="/projects">Projects</RouterLink>
            <RouterLink class="navbar-link" to="/contact">Contact</RouterLink>
          </nav>
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

@use './assets/styles/variables' as var;
@use './assets/styles/app/page.scss';
@use './assets/styles/app/wrapper.scss';
@use './assets/styles/app/logo.scss';
@use './assets/styles/app/header.scss';
@use './assets/styles/app/footer.scss';
@use './assets/styles/app/navbar.scss';
@use './assets/styles/app/animations.scss';
@use './assets/styles/app/global.scss';

@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');



</style>
