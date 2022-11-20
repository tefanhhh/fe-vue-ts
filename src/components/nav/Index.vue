<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useStore } from '../../stores'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore()
  const { getPageTitle } = storeToRefs(store)
  function goToHome() {
    router.push('/')
  }
  function goToAbout() {
    router.push('/about')
  }
</script>
<template>
  <v-toolbar density="compact">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>{{ getPageTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      type="button"
      text
      class="font-weight-bold text-capitalize"
      @click="goToHome">
      Home
    </v-btn>
    <v-btn
      type="button"
      text
      class="font-weight-bold text-capitalize"
      @click="goToAbout">
      About
    </v-btn>
  </v-toolbar>
</template>
