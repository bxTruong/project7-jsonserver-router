<template>
    <h1>{{firstName}}</h1>
    <button @click=""></button>
</template>

<script>
import func from 'vue-editor-bridge';
export default {
    setup(){
        const firstName="Sky Albert";

        function onChangeSomething(){
            console.log("running here ...");
        }

        return {firstName, onChangeSomething};
    }
}
</script>