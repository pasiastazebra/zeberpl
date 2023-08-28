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
            <div class="project-buttons-cover">
                <button id="source">Source</button>
            </div>
            <div class="project-buttons-cover">
                <button id="demo">Demo</button>
            </div>
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
        display: grid;
        grid-template-columns: 50% 50%;

        &-cover {
            display: flex;
            justify-content: center;
        }

        #source {
            min-width: 50%;
            color: #fff;
            background: linear-gradient(61deg, rgba(1, 116, 1, 0.6) 0%, rgba(0, 112, 65, 0.6) 100%);
            padding: 10px 30px;

            border: none;
            border-radius: 50px;

            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            transition : 332ms;
            cursor: pointer;

            &:hover{
            transition : 332ms;
            padding: 10px 50px;
            min-width: 70%;
            }
        }

        #demo {
            min-width: 50%;

            color: #fff;
            background: linear-gradient(61deg, rgba(26, 1, 116, 0.6) 0%, rgba(1, 66, 126, 0.6) 100%);
            padding: 10px 30px;

            border: none;
            border-radius: 50px;

            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            transition : 332ms;
            cursor: pointer;

            &:hover{
            transition : 332ms;
            //padding: 10px 50px;
            min-width: 70%;
            }
        }
    }
}
</style>