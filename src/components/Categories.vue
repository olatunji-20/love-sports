<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="container">
            <!-- <div class="cate"><h3>Skiing</h3></div>
            <div class="cate"><h3>Sport watches</h3></div>
            <div class="cate"><h3>Racket sport</h3></div>
            <div class="cate"><h3>Bikes</h3></div>
            <div class="cate"><h3>Footwear</h3></div>
            <div class="cate"><h3>Leisure game</h3></div> -->
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Categories',
        data() {
            return {
                title: "Top categories",
            }
        }
    }
</script>

<style scoped>
    section {
        border: 15px solid red;
        width: 100%;
        height: 100vh;
        background-color: aliceblue;
        padding: 40px 80px;
    }

    .container {
        width: 100%;
        height: 400px;
        border: 2px solid firebrick;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .cate {
        width: 340px;
        height: 230px;
        border: 1px solid brown;
        margin: 10px;
        border-radius: 6px;
        text-align: center;
    }

    .cate h3 {
        margin-top: 185px;
    }
    
</style>