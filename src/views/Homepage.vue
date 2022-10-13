<template>
    <header>
        <div>
            <section>
                <div class="logo-container">
                    <img src="../assets/lovesport.png" class="logo" />
                </div>
                <ul class="options">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
                <div class="search-bar">
                    <input placeholder="Search..." />
                    <div class="love"></div>
                    <div class="love"></div>
                </div>
            </section>
            <div class="under">
                <ul>
                    <li @mouseenter="dropdown" @mouseleave="undrop" class="dropdown">Sports</li>
                        <div v-show="drop" class="dropdown-content">
                            <p>fhhfifie</p>
                            <p>jdhhfioi</p>
                        </div>
                    <li>Footwear</li>
                    <li>Apparel</li>
                    <li>Bestsellers</li>
                    <li>Special deals</li>
                </ul>
            </div>
        </div>
        <div class="main-container">
            <Categories />
            <Sale />
            <Latest />
            <Sponsors />
            <Recently />
            <Footer />
        </div>
    </header>
</template>

<script>
import Categories from '../components/Categories.vue';
import Sale from '../components/Sale.vue';
import Latest from '../components/Latest.vue'
import Sponsors from '../components/Sponsors.vue';
import Recently from '@/components/Recently.vue';
import Footer from '@/components/Footer.vue';


export default {
    name: "Homepage",
    data() {
        return {
            drop: false
        };
    },
    methods: {
        dropdown() {
            this.drop = true
        },
        undrop() {
            this.drop =  false
        }
    },
    components: {
        Categories,
        Sale,
        Latest,
        Sponsors,
        Recently,
        Footer
}


}
</script>

<style scoped>
section {
    /* border: 1px solid green; */
    width: 100%;
    height: 70px;
    background-color: black;
    text-align: left;
}

.main-container {
    border: 9px solid blueviolet;
    width: 100%;
    height: auto;
    padding: 100px 0px;
}
.logo-container {
    width: 200px;       
    height: 35px;
    border: 1px solid red;
    position: relative;
    float: left;
    display: inline;
    margin: 15px 20px 15px 80px;
}

.logo {
    width: 100%;
    height: 100%;
}

.options {
    display: inline;
}

.options li {
    list-style-type: none;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 17px;
    border: 1px solid green;
    color: white;
}

.search-bar {
    border: 1px solid blue;
    width: 400px;
    height: 45px;
    padding: 10px;
    margin: 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    float: right;
}

.search-bar input {
    width: 300px;
    text-indent: 20px;
}

.love {
    width: 30px;
    height: 25px;
    background-color: lawngreen;
}

.under {
    width: 100%;
    height: 60px;
    padding: 1px;
    background-color: aqua;
    border-bottom: 1px solid black;
    text-align: left;
}

@keyframes sheriff {
    0% {
        top: 140px;
        opacity: 0;
    }
    100% {
        top: 115px;
        opacity: 1;
    }
}
.dropdown-content {
    width: 130px;
    height: auto;
    border: 2px solid green;
    background-color: beige;
    position: absolute;
    text-align: left;
    padding: 5px;
    animation-name: sheriff;
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
}
.dropdown:hover .dropdown-content {
    background-color: burlywood;
}

.under ul {
    margin-left: 20px;
    border: 1px solid orangered;
}

.under ul li {
    list-style-type: none;
    display: inline-block;
    padding: 5px 30px;
}
</style>