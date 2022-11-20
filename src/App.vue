<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from './stores'
  import Nav from './components/nav/Index.vue'

  const store = useStore()
  const { setPageTitle } = store

  onMounted(() => {
    setPageTitle('fe vue ts')
  })
</script>
<template>
  <Nav />
  <router-view></router-view>
</template>
