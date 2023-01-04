<template>
    <h1>This is transactions detail</h1>
    <h1>{{ $route.params.id }}</h1>
    <div v-for="item in postModel" :key="item.id">
        <h1>{{}}</h1>
        <h2>{{item.body}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            postModel:{}
        }
    },
    created(){
        fetch("https://jsonplaceholder.typicode.com/posts" + $route.params.id)
    }
}
</script>