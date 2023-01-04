import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transactions from "./pages/transactions.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFound from "./pages/not-found.vue";

const routes = [
    { path: "/", name: "home-route", component: Home },
    { path: "/transactions", name: "transactions-route", component: Transactions },
    { path: "/transactions/:id", name: "transaction-detail-route", component: TransactionDetail },
    { path: "/ts", name: "ts-route", redirect: "/transactions" },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;