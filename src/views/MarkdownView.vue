<script setup lang="ts">
import Card from '../components/CardComponent.vue'
import { onMounted, ref } from 'vue'

let markdown = ref()

onMounted(async () => {
  const response = await fetch('docs/page.md')
  const text = await response.text()
  markdown.value = text
})
</script>

<template>
  <div class="row row-cards">
    <Card col="col-md-12" padding="card-md">
      <VueShowdown flavor="github" :markdown="markdown" />
    </Card>
  </div>
</template>
