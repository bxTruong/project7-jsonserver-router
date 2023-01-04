<template>

<h1>Transactions is here</h1>
<div v-for="item in transactions" :key="item.id">
    <router-link :to="`/transactions/${item.id}?name=${item.name}&price=${item.price}`">{{ item.name }}</router-link>
    <div>Price: {{item.price}}</div>
</div>

</template>

<script>
    export default {
        data(){
            return{
                transactions:[]
            }
        },
        created(){
            fetch("https://jsonplaceholder.typicode.com/posts");
        }
    }
</script>