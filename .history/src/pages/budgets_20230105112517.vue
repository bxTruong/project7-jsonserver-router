<template>
  <h1>This is budgets</h1>
  <div v-if="posts.length">
    <div v-for="item in posts" :key="item.id">
      <!-- <router-link :to="`/transactions/${item.id}?title=${item.title}&body=${item.body}`">{{ item.id }}</router-link> -->
      <div>Title: {{ item.title }}</div>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
</template>

<script>
import fetchPosts from "../uses/fetchPosts.js"
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },

  // setup cannot run async
  setup(props, context) {
    const {posts, fetchData} = fetchPosts;
    fetchData();
    return {}
  },

  /**
   * only use theme in props (off reactive), only use emit in context
   * ? setup({theme}, {emit}){
   * ? console.log(props.theme);
   * ? }
   * */
};
</script>