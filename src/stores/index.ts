import { defineStore } from 'pinia'

class State {
  constructor(public pageTitle?: string) {}
}

export const useStore = defineStore('index', {
  state: () => new State(),
  getters: {
    getPageTitle: state => state.pageTitle,
  },
  actions: {
    setPageTitle(title: string) {
      this.pageTitle = title
    },
  },
})
