<script>

export default {
    props: ['contact']
}

</script>

<template>
    <a :href="contact.url" class="contact-link">
        <div class="contact-wrapper">
            <img :src="contact.img" :alt="contact.alt" class="contact-icon">
            <input class="contact-textfield" type="text" :value="contact.value" readonly/>
        </div>
    </a>
    
</template>

<style scoped lang="scss">
@use "../assets/styles/variables" as var;

.contact {
    &-wrapper {
        background-color: rgb(255, 255, 255);
        display: flex;

        max-width: 300px;
        border-radius: 9px;

        margin: 5px 25px;

        -webkit-box-shadow: 5px 5px 7px -1px rgba(66, 68, 90, 1);
        -moz-box-shadow: 5px 5px 7px -1px rgba(66, 68, 90, 1);
        box-shadow: 5px 5px 7px -1px rgba(66, 68, 90, 1);

        transition: 0.2s;

        cursor: pointer;

        &:hover {
            scale: 120%;
        }

    }

    &-link{
        text-decoration: none;

        max-width: 300px;
    }

    &-textfield {
        border-radius: 0 10px 10px 0px;
        border-style: none;
        text-align: center;
        text-decoration: none;

        cursor: pointer;

        max-width: 150px;

        padding: 5px 3px;

        font-size: 18px;

        &:focus {
            outline: none;
        }
    }

    &-icon {
        max-width: 60px;
        height: 60px;
    }
}



</style>