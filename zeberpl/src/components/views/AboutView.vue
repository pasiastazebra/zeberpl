<script setup>

const aboutMe = `I am an aspiring Front-End developer for whom it is a priority to constantly expand my horizons.
                 I want to create websites that are aesthetically pleasing, functional and above all efficient.
                 Outside of hours I am interested in aviation, sociology, planning and geography in general.
                 In moments of inspiration I also play with vector graphics. Bad coffee is always better than
                 no coffee at all.`;

</script>

<template>
    <div class="article-wrapper">
        <h1>About me</h1>
        <p>{{ aboutMe }}</p>
    </div>
</template>

<style scoped lang="scss">
 @use "../../assets/ViewsStyle";
</style>
