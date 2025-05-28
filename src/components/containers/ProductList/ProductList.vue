<script setup lang="ts">
// Container Component
import useLogic from './use-logic.hook'
const logic = useLogic()
</script>

<template>
  <div class="ProductList">
    <slot />
  </div>
</template>
