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
                <div class="board"><div class="item"></div></div>
                <div class="board"><div class="item"></div></div>
            </div>
        </div>

    </section>

</template>

<script>
    export default {
        name: 'Latest',
        data() {
            return {
                title: "Latest products"
            }
        }
    }
</script>

<style scoped>
    section {
        border: 5px solid blue;
        width: 100%;
        height: auto;
        background-color: snow;
        padding: 60px 80px;
    }


    .scroll {
        border: 7px solid navy;
        width: 100%;
        height: auto;
        overflow: auto;
    }

    .sale {
        border: 4px solid firebrick;
        width: 3000px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .board {
        width: 260px;
        height: 480px;
        padding: 4px;
        border: 1px solid black;
        margin: 5px;
    }

    .board .item {
        width: 250px;
        height: 300px;
        background-color: floralwhite;
        border: 2px solid red;
    }

</style>