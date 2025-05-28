<script setup lang="ts">

import { PatientList } from '@/components/containers';
import * as Layouts from '@/components/layouts'
</script>

<template>
    <Layouts.Default title="Patientel">
        
        <div>
            <PatientList />
        </div>

    </Layouts.Default>
</template>