<template>
    <section>
        <div class="foot1"></div>
        <div class="foot2"></div>
        <div class="foot3"></div>
        <div class="foot4"></div>
        <div class="foot5"><h3>FALANA SHERIFF OLATUNJI.</h3></div>
    </section>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    section {
        border: 2px solid tomato;
        width: 100%;
        height: auto;
        background-color: black;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .foot1 {
        width: 280px;
        height: 350px;
        border: 2px solid red;
        background-color: aliceblue;
    }

    .foot2, .foot3, .foot4 {
        width: 200px;
        height: 350px;
        border: 2px solid green;
        background-color: salmon;
    }

    .foot5 {
        width: 100%;
        height: 70px;
        border: 1px solid blue;
        background-color: aquamarine;
        /* display: block; */
        text-align: center;
    }
</style>