<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="scroll">
            <div :class="move ? 'sale-move' : 'sale'">
                <div class="board"><div class="item"></div></div>
                <div class="board">AAAAA</div>
                <div class="board">BBBBBBBBBB</div>
                <div class="board">CCCCC</div>
                <div class="board">DDDDDD</div>
                <div class="board">EEEEE</div>
                <div class="board"><div class="item"></div></div>
                <div class="board"><div class="item"></div></div>
            </div>
        </div>
        <div class="pointer2" v-on:click="moveRight"></div>
        <div class="pointer" v-on:click="moveLeft"></div>
    </section>
</template>

<script>
    export default {
        name: 'Sale',
        data() {
            return {
                title: "Sale items",
                move: false
            }
        },
        methods: {
            moveLeft() {
                this.move = true;
                alert("clickdddddddddd")
            },
            moveRight() {
                this.move = false;
                alert("unmove");
            }
        }
    }
</script>

<style scoped>
    section {
        border: 5px solid blue;
        width: 100%;
        height: auto;
        background-color: cornsilk;
        padding: 60px 80px;
    }


    .scroll {
        border: 7px solid navy;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .sale {
        border: 4px solid firebrick;
        width: 2200px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        transform: translateX(0px);
        transition: 1s;
    }
    .sale-move {
        border: 4px solid green;
        background-color: powderblue;
        width: 2200px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        transform: translateX(-1100px);
        transition: 1s;

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

    .pointer {
        width: 50px;
        height: 50px;
        background-color: royalblue;
        position: relative;
        float: right;
        bottom: 350px;
        left: 20px;
        border-radius: 50%;
    }
    .pointer:active {
        background-color: green;
    }
 
    .pointer2 {
        width: 50px;
        height: 50px;
        background-color: red;
        position: relative;
        bottom: 300px;
        right: 20px;
        border-radius: 50%;
    }

</style>