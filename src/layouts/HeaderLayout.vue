<script setup lang="ts">
const item = {
  name: 'Github',
  href: 'https://github.com/Fl0wyn/starter-vue-tabler.git'
}
</script>

<template>
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <div class="page-pretitle">Hello</div>
          <h2 class="page-title">
            {{ $route.name }}
          </h2>
        </div>
        <div class="col-auto ms-auto d-print-none">
          <div class="btn-list">
            <span class="d-none d-sm-inline">
              <a :href="item.href" target="_blank" rel="noopener noreferrer" class="btn">
                {{ item.name }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
