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
                transactions:[
                    {id: 1, name: "Go to supermarket", date: "07/01/2023", price: 1000000},
                    {id: 2, name: "Go to book store" , date: "07/01/2023", price: 2000000},
                    {id: 2, name: "Go to museum" , date: "07/01/2023", price: 1050000},
                ]
            }
        }
    }
</script>