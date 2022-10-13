<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="scroll">
            <div :class="move ? 'sale-move' : 'sale'">
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
                <div class="board">
                    <div class="item">
                        <div class="discount"></div>
                        <div class="love"></div>
                        <div class="free"><img class="motor" src="../assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                </div>
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
        padding: 5px;
    }

    .discount {
        width: 50px;
        height: 20px;
        background-color: red;
        margin: 2px;
        float: left;
    }

    .love {
        width: 20px;
        height: 20px;
        background-color: lawngreen;
        border-radius: 50%;
        position: relative;
        margin: 2px;
        float: right;
    }

    .free {
        width: 30px;
        height: 20px;
        background-color: wheat;
        border: 1px solid black;
        position: relative;
        right: 50px;
        top: 260px;
        overflow: hidden;
    }

    .free p {
        display: inline;
        padding-left: 5px;
        font-size: 12px;
    }
    .free:hover {
        width: 115px;
        transition: .4s;
    }
    .motor {
        width: 30px;
        height: 20px;
        float: right;
        display: inline;
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