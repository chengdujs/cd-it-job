<template>
  <div class="page-message">
    <h1>Message</h1>
  </div>
</template>

<script>
  import { eventBus } from 'common';
  export default {
    data() {
      return {};
    },
    created() {
      eventBus.emit('set-current-page', 'message');
    }
  };
</script>
