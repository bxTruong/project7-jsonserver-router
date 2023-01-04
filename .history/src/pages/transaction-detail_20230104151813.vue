<template>
    <h1>This is transactions detail</h1>
    <h1>{{ $route.params.id }}</h1>
    <div v-if="postModel">
        <h2>{{ postModel.title }}</h2>
        <h3>{{ postModel.body }}</h3>
    </div>
   div
</template>

<script>
export default {
    data(){
        return {
            postModel:null
        }
    },
    created(){

        console.log( fetch("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
        .then((response)=>response.json()));

        fetch("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
        .then((response)=>response.json())
        .then((data)=>this.postModel = data);
    }
}
</script>