<template>
    <UI.Header size="medium">{{ title }}</UI.Header>
    <UI.Main :title="title">
        <slot />
    </UI.Main>
    <UI.Footer size="medium"/>
</template>

<script setup lang="ts">
import * as UI from '@ui';
import {Title} from '@/core';

defineProps<{title:Title}>();
</script>

