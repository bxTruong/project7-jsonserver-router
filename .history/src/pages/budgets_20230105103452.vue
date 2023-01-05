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
    created(){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>response.json())
            .then((data)=>this.transactions=data);
        },
    setup(props, context){
        const post
        
    },
   
    /** 
     * only use theme in props (off reactive), only use emit in context
     * ? setup({theme}, {emit}){
     * ? console.log(props.theme);
     * ? }
     * */ 
    
}

</script>