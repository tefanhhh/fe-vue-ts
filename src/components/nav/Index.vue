<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useStore } from '../../stores'
  const store = useStore()
  const { getPageTitle } = storeToRefs(store)
</script>
<template>
  <v-toolbar density="compact">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>{{ getPageTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn type="button" text> Home </v-btn>
    <v-btn type="button" text> About </v-btn>
  </v-toolbar>
</template>
