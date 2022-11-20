<script setup lang="ts">
  import Nav from './components/nav/Index.vue'
  import { useStore } from './stores'

  const store = useStore()
  const { setPageTitle } = store

  setPageTitle('Scaffolding.js')
</script>
<template>
  <Nav />
  <v-list border class="mx-auto" max-width="256">
    <v-list-item link prepend-icon="inbox-arrow-down" title="Inbox">
      <template v-slot:append>
        <v-badge color="error" content="6" inline></v-badge>
      </template>
    </v-list-item>

    <v-list-item link prepend-icon="send" title="Sent Mail"></v-list-item>

    <v-list-item link prepend-icon="delete" title="Trash">
      <template v-slot:append>
        <v-badge color="info" content="12" inline></v-badge>
      </template>
    </v-list-item>

    <v-list-item link prepend-icon="alert-circle" title="Spam"></v-list-item>
  </v-list>
</template>
