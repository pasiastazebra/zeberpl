<script>

export default {
    props: ['project']
}

</script>

<template>
    <div class="project-container">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="centered">
            <img :src="project.img" :alt="project.title + ' screenshot'" class="project-image">
        </div>
        <p class="project-description">{{ project.desc }}</p>
        <div class="project-buttons">
            <form class="project-buttons-cover">
                <button :formaction="project.srcUrl" :title="project.srcUrl" id="source" class="button">Source</button>
            </form>
            <form class="project-buttons-cover">
                <button :formaction="project.demoUrl" :title="project.demoUrl" id="demo" class="button">Demo</button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/variables" as var;

.project{

    &-container {
        background: var.$secondary;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.342);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);

        margin: 20px;
        width: 90%;

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
            min-width: 50%;
            margin: 5%;
        }

        #source {
            background: linear-gradient(61deg, rgba(1, 116, 1, 0.6) 0%, rgba(0, 112, 65, 0.6) 100%);
        }

        #demo {
            background: linear-gradient(61deg, rgba(26, 1, 116, 0.6) 0%, rgba(1, 66, 126, 0.6) 100%);
        }
    }
}

.centered {
    display: flex;
    justify-content: center;
}

@media only screen and (min-width: 768px) {
    .project{
        &-container {
        margin: 25px;
        width: 40%;
        }
        &-image{
            transition: 0.2s;
            &:hover {
            scale: 105%;
            }
        }
        &-buttons {
           button {
            transition : 332ms;
            cursor: pointer;
            }

            #source {
                &:hover{
                transition : 332ms;

                background: linear-gradient(61deg, rgba(1, 116, 1, 0.9) 0%, rgba(0, 112, 65, 0.9) 100%);
                min-width: 70%;
                }
            }

            #demo {
                &:hover{
                transition : 332ms;

                background: linear-gradient(61deg, rgba(26, 1, 116, 0.9) 0%, rgba(1, 66, 126, 0.9) 100%);
                min-width: 70%;
                }
            }
        }
    }
}
</style>