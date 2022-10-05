<template>
    <header>
        <section>
            <div class="logo-container">

            </div>
            <ul class="options">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div class="search-bar">
                <input placeholder="Search..." />
            </div>
        </section>
        <div class="under">
            <ul>
                <li>Sports</li>
                <li>Footwear</li>
                <li>Apparel</li>
                <li>Bestsellers</li>
                <li>Special deals</li>
            </ul>
        </div>
        <Categories />
        <!-- <Sale /> -->
    </header>
</template>

<script>
import Categories from '../components/Categories.vue';
// import Sale from '@/components/Sale.vue';


export default {
    name: "Homepage",
    data() {
        return {

        };
    },
    components: {
    Categories,
    // Sale
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

    .logo-container {
        width: 200px;
        height: 40px;
        border: 1px solid red;
        position: relative;
        float: left;
        display: inline;
        margin: 15px 20px 15px 80px;
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
        display: inline;
        position: relative;
        float: right;
    }

    .under {
        width: 100%;
        height: 60px;
        padding: 1px;
        background-color: aqua;
        border-bottom: 1px solid black;
        text-align: left;
    }

    .under ul {
        margin-left: 20px;
    }

    .under ul li {
        list-style-type: none;
        display: inline-block;
        padding: 5px 30px;
    }





</style>