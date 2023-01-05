<template>
    <!-- <h1>{{ firstName }}</h1>
    <h2>{{ secondName }}</h2>
    <h3>{{ car }}</h3>
    <button @click="onChangeSomething">Click me</button> -->
<input type="text" v-model="searchText">
<ul>
    <li v-for="item in fruitSelected" :key="item">
    <p>{{ item }}</p>
    </li>
</ul>
<p> {{setUp2}} </p>
<button>Change setUp2</button>
</template>

<script>
import {computed, reactive, ref, watch, watchEffect} from "vue";
export default {
    // setup(){
    //     const firstName = ref("Sky Albert");
    //     const secondName = ref({
    //         name:"Who",
    //         something:"NA"
    //     });
    //     let car = reactive({
    //         price: 10000,
    //         name:"May back"
    //     });

    //     function onChangeSomething(){
    //         car = {
    //             price: 55555,
    //             name: "Porsche"
    //         }

    //         secondName.value = {
    //             name:"I'm",
    //             something:"Here"
    //         }
            
    //         firstName.value = "David John";
    //     }

    //     return {firstName, secondName, car, onChangeSomething};
    // }

    setup(){
        const searchText = ref("");
        let fruits = reactive(["Apple","Orange","Mango","Lemon","Kiwi"]);
        const fruitSelected = computed(()=> fruits.filter((e2)=>e2.toLowerCase().includes(searchText.value.toLowerCase())));

        watch(searchText,(newValue, oldValue)=>console.log("newValue",newValue + oldValue));

        watchEffect(()=>{if(searchText.value) {console.log("run watchEffect")}});

        return {fruits, searchText, fruitSelected}
    },

    setup(){
        const setUp2=ref("This is setup 2");
        function changeSetUp2(){
            setUp2.value='New value setUp2'
        }
        return { setUp2, changeSetUp2};
    }
}
</script>