<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { IconMoon, IconSun, IconHome, IconSettings, IconBox } from '@tabler/icons-vue'
import myLogo from '@/assets/logo.svg'

interface Logo {
  src: string
  width: number
  height: number
}

const logo: Logo = {
  src: myLogo,
  width: 110,
  height: 32
}

const items = [
  {
    name: 'Home',
    href: '/',
    icon: IconHome
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: IconSettings
  }
]

const dropdown = {
  title: 'Ressources',
  icon: IconBox,
  items: [
    {
      name: 'Vue3',
      href: 'https://vuejs.org/',
      icon: 'https://vuejs.org/logo.svg'
    },
    {
      name: 'Vite',
      href: 'https://vitejs.dev/',
      icon: 'https://vitejs.dev/logo.svg'
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      icon: 'https://www.typescriptlang.org/favicon-32x32.png'
    },
    {
      name: 'Tabler',
      href: 'https://tabler.io/',
      icon: 'https://tabler.io/favicon.ico'
    }
  ]
}

const changeTheme = () => {
  const hours = new Date().getHours()
  hours >= 19 || hours <= 7 ? dark() : light()
}

const dark = () => document.body.setAttribute('data-bs-theme', 'dark')

const light = () => document.body.setAttribute('data-bs-theme', 'light')

onMounted(() => {
  changeTheme()
})
</script>

<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none user-select-none">
    <div class="container-xl">
      <!-- Button navbar toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Logo -->
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href=".">
          <img
            :src="logo.src"
            :width="logo.width"
            :height="logo.height"
            alt="Tabler"
            class="navbar-brand-image"
          />
        </a>
      </h1>

      <div class="navbar-nav flex-row order-md-last">
        <div class="d-none d-md-flex">
          <!-- Buttons change theme -->
          <div class="nav-link px-0">
            <IconMoon type="button" @click="dark" class="hide-theme-dark icon" />
            <IconSun type="button" @click="light" class="hide-theme-light icon" />
          </div>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbar-menu">
        <div
          class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center"
        >
          <ul class="navbar-nav">
            <!-- Item list -->
            <li
              v-for="(item, i) in items"
              :key="i"
              class="nav-item"
              :class="{ active: $route.name === item.name }"
            >
              <RouterLink class="nav-link" :to="item.href">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <component :is="item.icon" class="icon" />
                </span>
                <span class="nav-link-title">
                  {{ item.name }}
                </span>
              </RouterLink>
            </li>

            <!-- Dropdown item list -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-dropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <component :is="dropdown.icon" class="icon" />
                </span>
                <span class="nav-link-title">
                  {{ dropdown.title }}
                </span>
              </a>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-for="(item, i) in dropdown.items"
                  :key="i"
                  :href="item.href"
                >
                  <img :src="item.icon" width="18" class="me-2" :alt="`Logo ${item.name}`" />
                  {{ item.name }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
