<template>
    <h1>{{ firstName }}</h1>
    <h2>{{ secondName }}</h2>
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
            car.price=2000;
            secondName.value = {
                name:"I'm",
                something:"Here"
            };
            firstName.value = "David John";
            console.log(car);
            console.log(secondName);
        }

        return {firstName, secondName, car, onChangeSomething};
    }
}
</script>