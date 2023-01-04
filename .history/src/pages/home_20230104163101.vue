<template>
    <h1>{{firstName}}</h1>
    <h2>{{car}}</h2>
    <button @click="onChangeSomething">Click me</button>
</template>

<script>
import {reactive, ref} from "vue";
export default {
    setup(){
        const firstName = ref("Sky Albert");
        const car = reactive({
            price: 10000,
            name:"May back"
        });

        function onChangeSomething(){
            console.log("running here ...");
            console.log(car);
            car.price=2000;
            firstName.value = "David John";
        }

        return {firstName, onChangeSomething};
    }
}
</script>