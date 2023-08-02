<template>
  <div id="app">
    <CryptoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CryptoList from './components/CryptoList/CryptoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    CryptoList,
  },
});
</script>
