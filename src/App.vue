<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from './stores'
  import Nav from './components/nav/Index.vue'
  import countryApi from './apis/country'

  const store = useStore()
  const { setPageTitle } = store

  onMounted(() => {
    setPageTitle('fe vue ts')
    countryApi.query().then(res => {
      console.log(res)
    })
  })
</script>
<template>
  <Nav />
  <router-view></router-view>
</template>
