<template>
    <h1>{{firstName}}</h1>
    <button @click="onChangeSomething">Click me</button>
</template>

<script>
export default {
    setup(){
        const firstName="Sky Albert";

        function onChangeSomething(){
            console.log("running here ...");
            firstName ="Bu"
        }

        return {firstName, onChangeSomething};
    }
}
</script>