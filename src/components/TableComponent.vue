<script setup lang="ts">
defineProps<{
  title?: string
  col?: string
  thead: {
    name: string
    colspan?: number
  }[]
}>()
</script>

<template>
  <div :class="col">
    <div class="card">
      <div class="card-header" v-if="title">
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <table class="table card-table table-vcenter">
        <thead>
          <tr>
            <th v-for="(item, i) in thead" :key="i" :colspan="item.colspan">{{ item.name }}</th>
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
  </div>
</template>
