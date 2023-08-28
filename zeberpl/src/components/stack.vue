<script>

export default {
    props: ['icons']
}

</script>

<template>
    <div class="svg-container">
      <img v-for="icon in icons" :src="icon">
    </div>
  </template>

<style scoped lang="scss">
 @use "../assets/SectionStyle";
</style>