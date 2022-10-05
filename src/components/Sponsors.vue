<template>
    <section>
        <div class="container">
            <div class="scroll">
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
                <div class="spons"></div>
            </div>
        </div>
        <div class="sky">
            <div class="sky1"><img class="image" src="../assets/fly.png" /></div>
            <div class="sky2">
                <h1>Subscribe to newsletter</h1>
                <p>Stay up to date with our latest news and promotions by signing up for our newsletter.</p>
                <input type="text" class="input">
                <input style="display: inline; height: 15px; width: 15px;" type="checkbox" /> <p style="display: inline">I agree to the Terms & Conditions and Privacy Policy</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Sponsors",
        data() {
            return {

            }
        }
    }   
</script>

<style scoped>
    section {
        border: 4px solid blue;
        width: 100%;
        height: 650px;
        background-color: floralwhite;
    }
    
    .container {
        border: 2px solid red;
        background-color: lightpink;
        width: 100%;
        height: auto;
        padding: 7px;
        overflow: auto;
    }
    .scroll {
        height: 100%;
        width: 2500px;
        padding: 15px;
        border: 2px solid green;
        background-color: lawngreen;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .spons {
        border: 1px solid red;
        background-color: aliceblue;
        width: 180px;
        height: 100px;
    }
    .sky {
        width: 100%;
        height: 500px;
        border: 3px solid greenyellow;
        background-color: ghostwhite;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .sky1 {
        width: 50%;
        height: 500px;
        border: 2px solid blueviolet;
        background-color: aliceblue;
    }

    .sky .sky1 .image {
        width: 100%;
        height: 100%;
    }
    .sky2 {
        width: 50%;
        height: 500px;
        border: 2px solid red;
        background-color: whitesmoke;
        padding: 100px 120px 100px 80px;
    }

    .input {
        width: 100%;
        height: 40px;
        border: 1px solid black;
        margin: 60px auto;
    }

</style>