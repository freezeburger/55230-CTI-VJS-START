<script setup lang="ts">
</script>

<template>
    <button></button>
</template>

<style scoped>
    button{
        color:white;
        border:none;
        margin:5px;
        transition:transform 0.3s ease;
        transform: scale(1);
        cursor:pointer;
    }

    button:hover{
        transform: scale(1.05);
    }

    button:active{
        transform: scale(.95);
    }

    button.secondary{
       background-color:gray;
    }

    button.primary{
       background-color:cornflowerblue;
    }

    button.critical{
       background-color:crimson;
    }



</style>