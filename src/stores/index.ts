import { defineStore } from 'pinia'

export const useStore = defineStore('index', {
  state: () => ({
    pageTitle: '',
  }),
  getters: {
    getPageTitle: state => state.pageTitle,
  },
  actions: {
    setPageTitle(title: string) {
      this.pageTitle = title
    },
  },
})
