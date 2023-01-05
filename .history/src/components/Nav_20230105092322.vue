<template>
    
    <nav class="nav">
        <router-link :to="{name: 'home-route'}"> Overview </router-link>
        <router-link :to="{name: 'transactions-route'}"> Transactions </router-link>
        <router-link :to="/"> Budgets </router-link>
        <router-link to="/"> Report </router-link>
        <router-link to="/"> Settings </router-link>
    </nav>

</template>
