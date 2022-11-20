<template>
  <form class="form__login d-flex flex-column align-center justify-center">
    <v-card width="300">
      <v-card-title class="text-center">Login</v-card-title>
      <div class="px-4 pb-4">
        <v-text-field
          variant="outlined"
          label="username"
          placeholder="input username..."
          hide-details />
        <br />
        <v-text-field
          variant="outlined"
          label="password"
          placeholder="input password..."
          hide-details />
      </div>
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
