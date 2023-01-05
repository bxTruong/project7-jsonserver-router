<template>
    <h1>This is budgets</h1>
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
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        }
        
    },
   
    /** 
     * only use theme in props (off reactive), only use emit in context
     * ? setup({theme}, {emit}){
     * ? console.log(props.theme);
     * ? }
     * */ 
    
}

</script>