<template>
    <header>
        {{ status }}
        <slot/>
    </header>
</template>

<script setup lang="ts">
import { useNetworkStatus } from '@/composable/use-network-status.hook';
import { CommonProps } from '@/core'

defineProps<Pick<CommonProps , 'size'>>();

const status = useNetworkStatus()
</script>



<style scoped>
</style>