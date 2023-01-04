<template>
    <h1>This is transactions detail</h1>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ postModel.title }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <div v-for="item in postModel" :key="item.id">
        <h1>{{ item.title }}</h1>
        <h2>{{ item.body }}</h2>
    </div>
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