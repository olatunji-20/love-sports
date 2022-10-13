<template>
    <section>
        <div class="foot1">
            <div class="foot-image">
                <img src="../assets/lovesport.png" class="logo" />
            </div>
            <div class="socials">
                <div class="social-media"></div>
                <div class="social-media"></div>
                <div class="social-media"></div>
                <div class="social-media"></div>
                
            </div>
        </div>
        <div class="foot2">
            <h3>About</h3>
                <p>About Us</p>
                <p>Privacy policy</p>
                <p>Terms & conditions</p>
                <p>Custom links</p>
        </div>
        <div class="foot3">
            <h3>Account</h3>
                <p>My Acount</p>
                <p>Wishlist</p>
                <p>Newsletter</p>
                <p>Gift certificates</p>
        </div>
        <div class="foot4">
            <h3>Categories</h3>
                <p>Skiing</p>
                <p>Sport Watches</p>
                <p>Racket sports</p>
                <p>Bikes</p>
                <p>Footwear</p>
                <p>Leisure games</p>
        </div>
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
        height: 310px;
        border: 2px solid red;
        background-color: aliceblue;
        padding: 20px 5px;
    }

    .foot-image {
        width: 200px;
        height: 40px;
        border: 2px solid red;
        margin: 10px auto;
        background-color: orange;
    }

    .logo {
        height: 100%;
        width: 100%;
    }

    .socials {
        width: 100%;
        height: auto;
        border: 2px solid green;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .social-media {
        width: 50px;
        height: 50px;
        background-color: orangered;
        margin: 1px;
        border-radius: 50%;
    }

    .foot2, .foot3, .foot4 {
        width: 200px;
        height: 310px;
        border: 2px solid green;
        background-color: salmon;
        padding: 30px 20px;
        text-indent: 0px;
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