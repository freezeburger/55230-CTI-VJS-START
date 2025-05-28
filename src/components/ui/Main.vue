<script setup lang="ts">
import { Title } from '@/core';

defineProps<{title:Title}>();

</script>

<template>
    <main>
        <h1 v-text="title"></h1>
        <!-- <h1>{{ title }}</h1> -->
        <hr>
        <slot />
    </main>
</template>

<style scoped>
</style>