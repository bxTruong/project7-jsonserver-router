<template>
    <h1>{{firstName}}</h1>
    <button @click="onChangeSomething">Click me</button>
</template>

<script>
import {ref} from "vue";
export default {
    setup(){
        const firstName = ref("Sky Albert");

        function onChangeSomething(){
            console.log("running here ...");
            this.firstName ="David John";
            firstName.value
        }

        return {firstName, onChangeSomething};
    }
}
</script>