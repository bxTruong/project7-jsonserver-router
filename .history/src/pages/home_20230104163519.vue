<template>
    <h1>{{ firstName }}</h1>
    <h2>{{ car }}</h2>
    <h3>{{ car }}</h3>
    <button @click="onChangeSomething">Click me</button>
</template>

<script>
import {reactive, ref} from "vue";
export default {
    setup(){
        const firstName = ref("Sky Albert");
        const secondName = ref({
            name:"Who",
            something:"NA"
        });
        const car = reactive({
            price: 10000,
            name:"May back"
        });

        function onChangeSomething(){
            console.log("running here ...");
            car.price=2000;
            secondName.value.name = "I'm";
            firstName.value = "David John";
            console.log(car);
            console.log(secondName);
        }

        return {firstName, onChangeSomething};
    }
}
</script>