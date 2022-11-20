<script setup lang="ts">
  import Nav from './components/nav/Index.vue'
  import { useStore } from './stores'

  const store = useStore()
  const { setPageTitle } = store

  setPageTitle('Scaffolding.js')
</script>
<template>
  <Nav />
</template>
