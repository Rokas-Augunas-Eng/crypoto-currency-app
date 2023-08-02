<template>
  <nav class="navbar">
    <h1 class="logo">Crypto App</h1>
  </nav>
</template>

<style lang="scss">
.navbar {
  background-color: $primaryColor;
  color: white;
  padding: 1rem;
  margin-bottom: 5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>
