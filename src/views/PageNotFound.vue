<script setup lang="ts">
import { IconArrowLeft } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'

const empty = {
  header: '404',
  title: 'Oops… You just found an error page',
  subtitle: 'We are sorry but the page you are looking for was not found',
  button: 'Back to home'
}
</script>

<template>
  <div class="container-tight py-4">
    <div class="empty">
      <div class="empty-header">{{ empty.header }}</div>
      <p class="empty-title">{{ empty.title }}</p>
      <p class="empty-subtitle text-muted">{{ empty.subtitle }}</p>
      <div class="empty-action">
        <RouterLink to="/" class="btn btn-primary">
          <IconArrowLeft class="icon me-2" />
          {{ empty.button }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
