<script>

export default {
    props: ['project']
}

</script>

<template>
    <div class="project-container">
        <h3 class="project-title">test</h3>
        <img src="../assets/projects/login.png" alt="" class="project-image">
        <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum atque dolorem sapiente ut, unde repellat eius adipisci! Molestiae voluptatibus tenetur repudiandae molestias officiis eum eligendi, sapiente error quis ducimus!</p>
        <div class="project-buttons">
            <div class="project-buttons-cover">
                <button id="source" class="button">Source</button>
            </div>
            <div class="project-buttons-cover">
                <button id="demo" class="button">Demo</button>
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

        border: none;
        border-radius: 20px;
        
    }

    &-description {
        margin: 2% 5%;
    }

    &-buttons {
        display: grid;
        grid-template-columns: 50% 50%;

        &-cover {
            display: flex;
            justify-content: center;
        }

        button {
            color: #fff;
            padding: 10px 30px;
            border: none;
            border-radius: 50px;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            transition : 332ms;
            cursor: pointer;
            min-width: 50%;
            margin: 5%;
        }

        #source {
            background: linear-gradient(61deg, rgba(1, 116, 1, 0.6) 0%, rgba(0, 112, 65, 0.6) 100%);

            &:hover{
            transition : 332ms;

            background: linear-gradient(61deg, rgba(1, 116, 1, 0.9) 0%, rgba(0, 112, 65, 0.9) 100%);
            min-width: 70%;
            }
        }

        #demo {
            background: linear-gradient(61deg, rgba(26, 1, 116, 0.6) 0%, rgba(1, 66, 126, 0.6) 100%);


            &:hover{
            transition : 332ms;

            background: linear-gradient(61deg, rgba(26, 1, 116, 0.9) 0%, rgba(1, 66, 126, 0.9) 100%);
            min-width: 70%;
            }
        }
    }
}
</style>