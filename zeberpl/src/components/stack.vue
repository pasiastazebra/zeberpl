<script>

export default {
    props: ['icons', 'title']
}

</script>

<template>
    <div class="stack-container">
        <h3 class="stack-title">{{ title }}</h3>
        <div class="svg-cover">
            <div class="svg-container">
                <img class="icon" v-for="icon in icons" :src="icon.url" :title="icon.title" :alt="icon.title + ' logo'">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets//styles/variables" as var;

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

    transition: 0.3s;

    &:hover {
        scale: 125%;
        rotate: 15deg;
        cursor: help;
    }
}
</style>