<template>

    <h1>Transactions is here</h1>
    <div v-for="item in transactions" :key="item.id">
        <router-link :to="`/transactions/${item.id}?title=${item.title}&body=${item.body}`">{{ item.id }}</router-link>
        <div>Price: {{ item.title }}</div>
    </div>

</template>

<script>
export default {
   set
}
</script>