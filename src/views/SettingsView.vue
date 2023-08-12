<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Card from '@/components/CardComponent.vue'
import Alert from '@/components/AlertComponent.vue'

type Data = {
  id: number
  name: string
  email: string
}

const data = ref<Data[]>([])
const error = ref()

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  response.ok ? (data.value = await response.json()) : (error.value = response.status)
})
</script>

<template>
  <div class="row row-cards">
    <Card col="col-md-12" title="JSONPlaceholder + RoboHash">
      <Alert status="danger" :msg="error" v-if="error" />

      <div class="row align-items-center p-1" v-for="item in data" :key="item.id">
        <div class="col-auto">
          <img :src="'https://robohash.org/' + item.id" class="avatar" alt="avatar" width="24" />
        </div>
        <div class="col">
          <div class="font-weight-medium">
            {{ item.name }}
          </div>
          <div class="text-muted">
            {{ item.email }}
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
