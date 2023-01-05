<template>
    <h1>This is budgets</h1>
    <div v-if="post"></div>
</template>

<script>
import {ref} from "vue";

export default {
    props:{
        theme:{
            type:String,
            required: false,
            default: "light",
        }
    },

        // setup cannot run async
    setup(props, context){
        const posts = ref([]);
        const error = ref(null);
        
         // setup cannot run async, use other function async await to call Data
        const fetchData = async ()=>{
           try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok) throw Error("Something went wrong");
            posts.value = await response.json();
           }catch(e){
            error.value=e;
            console.log(error.value);
           }
        }

        fetchData();

        return {posts};
        
    },
   
    /** 
     * only use theme in props (off reactive), only use emit in context
     * ? setup({theme}, {emit}){
     * ? console.log(props.theme);
     * ? }
     * */ 
    
}

</script>