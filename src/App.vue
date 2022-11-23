<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from './stores'
  import Nav from './components/nav/Index.vue'
  import api from './apis'

  const store = useStore()
  const { setPageTitle } = store

  onMounted(() => {
    setPageTitle('fe vue ts')
    api.country.query().then(res => {
      console.log(res)
    })
  })
</script>
<template>
  <Nav />
  <router-view></router-view>
</template>
