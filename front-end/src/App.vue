<template>
  <div id="app">
    <NavBar />
    <CryptoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CryptoList from './components/crypto/CryptoList.vue';
import NavBar from './components/navigation/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    CryptoList,
    NavBar,
  },
});
</script>
