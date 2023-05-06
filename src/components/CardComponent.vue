<script setup lang="ts">
defineProps<{
  title?: string
  col?: string
  padding?: string
  status?: {
    direction: 'top' | 'bottom' | 'start' | 'end'
    color: string
  }
}>()
</script>

<template>
  <div :class="col">
    <div :class="`card ${padding}`">
      <div v-if="status" :class="`card-status-${status.direction} bg-${status.color}`"></div>
      <div class="card-header" v-if="title">
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>
