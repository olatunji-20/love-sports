<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="scroll">
            <div class="sale">
                <div class="board"><div class="item"></div></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
                <div class="board"></div>
            </div>
        </div>

    </section>

</template>

<script>
    export default {
        name: 'Sale',
        data() {
            return {
                title: "Sale items"
            }
        }
    }
</script>

<style scoped>
    section {
        border: 5px solid blue;
        width: 100%;
        height: 700px;
        background-color: cornsilk;
        padding: 40px 80px;
    }


    .scroll {
        border: 7px solid navy;
        width: 100%;
        height: 550px;
        margin-top: 500px;
        overflow: hidden;
    }

    .sale {
        border: 4px solid firebrick;
        width: 3000px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .board {
        width: 260px;
        height: 480px;
        padding: 4px;
        border: 2px solid black;
        margin: 5px;
    }

    .board .item {
        width: 250px;
        height: 300px;
        border: 2px solid green;
    }

</style>