<script>

export default {
    props: ['icons']
}

</script>

<template>
    <div class="stack-container">
        <div class="svg-container">
            <img class="icon" v-for="icon in icons" :src="icon">
        </div>
    </div>
  </template>

<style scoped lang="scss">
.svg-container {
    display: grid;
    grid-template-columns: 70px 70px;
}
.icon {
    max-width: 60px;
    margin: 5px;
}
</style>