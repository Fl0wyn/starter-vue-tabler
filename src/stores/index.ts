import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    app_title: 'Starter - Vue Tabler'
  })
})
