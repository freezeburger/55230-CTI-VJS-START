<script setup>
import * as UI from '@ui';
import {Title} from '@/core';

defineProps<{title:Title}>();

</script>

<template>
    <UI.Header size="medium"></UI.Header>
    <UI.Main :title="title">
        <slot />
    </UI.Main>
    <UI.Footer />
</template>