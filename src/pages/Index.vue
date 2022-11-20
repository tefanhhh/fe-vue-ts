<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '../stores/auth'

  const store = useAuthStore()
  const { login } = store

  const [username, password] = [ref(''), ref('')]
  const showPassword = ref(false)

  function toggleShowPassword() {
    showPassword.value = !showPassword.value
  }

  function _login(ev: Event) {
    console.log(ev)
    login('hai tefan')
  }
</script>
<template>
  <form
    class="form__login d-flex flex-column align-center justify-center"
    novalidate
    @submit.prevent="_login">
    <v-card width="300">
      <v-card-title class="text-center">Login</v-card-title>
      <div class="px-4 pb-4">
        <v-text-field
          v-model="username"
          variant="outlined"
          label="username"
          placeholder="input username..."
          hide-details />
        <br />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          label="password"
          placeholder="input password..."
          hide-details
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="toggleShowPassword()" />
      </div>
      <v-card-actions>
        <v-btn
          type="submit"
          block
          variant="flat"
          color="primary"
          class="text-capitalize font-weight-bold"
          >Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </form>
</template>
<style lang="scss" scoped>
  .form {
    &__login {
      height: calc(100vh - 48px);
    }
  }
</style>
