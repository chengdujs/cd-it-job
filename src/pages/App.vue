<template>
  <div class="page-home">
    <invite-app></invite-app>
  </div>
</template>

<script>
  import { InviteApp } from './invite'

  export default {
    components: {
      InviteApp
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%;
    background: #f7f3f7;
  }
</style>