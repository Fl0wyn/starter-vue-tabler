<script setup lang="ts">
import Card from '../components/CardComponent.vue'
import Table from '../components/TableComponent.vue'

const thead = [
  {
    name: 'Network'
  },
  {
    name: 'Visitors',
    colspan: 2
  }
]

const tbody = [
  {
    network: 'Facebook',
    visitors: 1.5,
    progress: 50
  },
  {
    network: 'Twitter',
    visitors: 0.5,
    progress: 25
  },
  {
    network: 'LinkedIn',
    visitors: 0.2,
    progress: 10
  },
  {
    network: 'Google+',
    visitors: 0.1,
    progress: 5
  }
]
</script>

<template>
  <div class="row row-cards">
    <Card col="col-md-6" title="Sample card">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quae dolorem. Eos tenetur
        quas ducimus aperiam suscipit, eum debitis ullam obcaecati aliquid! Dolor excepturi
        temporibus veniam est praesentium minima. Non. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Minima magni error unde reiciendis odit beatae aliquid cupiditate illo
        fugiat aperiam quaerat, veritatis corporis voluptate voluptatem fugit rem. Cupiditate,
        praesentium doloribus.
      </div>
      <div class="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam suscipit voluptatum quasi
        soluta placeat sequi optio error, maxime est eos iste accusamus distinctio magni quam
        deleniti temporibus a vero tenetur.
      </div>
    </Card>

    <Table col="col-md-6" title="Table card" :thead="thead">
      <tr v-for="(item, i) in tbody" :key="i">
        <td>{{ item.network }}</td>
        <td>{{ item.visitors }}</td>
        <td class="w-50">
          <div class="progress progress-xs">
            <div class="progress-bar bg-primary" :style="`width: ${item.progress}%`"></div>
          </div>
        </td>
      </tr>
    </Table>
  </div>
</template>
