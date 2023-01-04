<template>
    <h1>{{firstName}}</h1>
    <button @click="onChangeSomething">Click me</button>
</template>

<script>
import 
export default {
    setup(){
        const firstName="Sky Albert";

        function onChangeSomething(){
            console.log("running here ...");
            this.firstName ="David John";
        }

        return {firstName, onChangeSomething};
    }
}
</script>