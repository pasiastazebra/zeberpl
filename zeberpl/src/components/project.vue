<script>

export default {
    props: ['project']
}

</script>

<template>
    <div class="project-container">
        <h3 class="project-title">test</h3>
        <img src="../assets/projects/login.png" alt="" class="project-image">
        <div class="project-buttons">
            <button>Source</button>
            <button>Demo</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/variables" as var;

.project{

    &-container {
        background: var.$secondary;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.342);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);

        margin: 5px;
        width: 45%;
    }

    &-title {
        text-align: center;
    }

    &-image {
        max-width: 90%;
        margin: 2% 5%;
        
    }

    &-buttons {
        display: flex;
        justify-content: center;
    }
}
</style>