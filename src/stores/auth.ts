import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: state => state.token,
  },
  actions: {
    login(token: string) {
      this.token = token
      Cookies.set('token', token)
    },
  },
})
