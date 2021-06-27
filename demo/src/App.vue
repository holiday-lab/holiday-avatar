<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const message = ref('Holiday Avatar');

    return {
      message,
    };
  },
});
</script>
