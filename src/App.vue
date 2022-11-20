<script setup lang="ts">
  import Nav from './components/nav/Index.vue'
  import { useStore } from './stores'

  const store = useStore()
  const { setPageTitle } = store

  setPageTitle('Scaffolding.js')
</script>
<template>
  <Nav />
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>
