<script>

export default {
    props: ['project']
}

</script>

<template>
    <div class="project-container">
        <h3 class="project-title">test</h3>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/variables" as var;

.stack{

    &-container {
        background: var.$secondary;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.342);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);

        margin: 5px;
        min-width: 140px;
    }
    &-title {
        text-align: center;
    }
}
.svg{
    &-container {
       display: grid;
       grid-template-columns: 70px 70px;
    }
    &-cover {
        display: flex;
        justify-content: center;
    }
}
.icon {
    max-width: 60px;
    margin: 5px;
}
</style>