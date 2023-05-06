<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  msg: string | number
  status: 'success' | 'info' | 'warning' | 'danger'
}>()

const title = computed(() => {
  if (props.status === 'success') return 'Success'
  if (props.status === 'info') return 'Information'
  if (props.status === 'warning') return 'Warning'
  if (props.status === 'danger') return 'Danger'
  return 'Error'
})

const message = computed(() => {
  if (props.msg === 400) return '(400) Bad Request'
  if (props.msg === 401) return '(401) Unauthorized'
  if (props.msg === 403) return '(403) Forbidden'
  if (props.msg === 404) return '(404) Not Found'
  if (props.msg === 500) return '(500) Internal Server Error'
  if (props.msg === 503) return '(503) Service Unavailable'
  if (props.msg === 504) return '(504) Gateway Timeout'
  if (props.msg === 0) return '(0) Network Error'
  return props.msg
})
</script>

<template>
  <div :class="`alert alert-${status}`" role="alert">
    <h4 class="alert-title">{{ title }}</h4>
    <div class="text-muted">{{ message }}</div>
  </div>
</template>
