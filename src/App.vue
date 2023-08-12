<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/layouts/NavbarLayout.vue'
import Header from '@/layouts/HeaderLayout.vue'
import { useAppStore } from '@/stores/index'

const message = useAppStore().app_title
document.title = message
</script>

<template>
  <div class="page">
    <Navbar />
    <div class="page-wrapper">
      <Header />
      <div class="page-body">
        <div class="container-xl">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
