<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" class="table-head">Crypto</th>
        <th class="table-head d-none d-md-table-cell">Price</th>
        <th class="table-head d-none d-md-table-cell">Volume 24 hours</th>

        <th scope="col" class="table-head">Change</th>
      </tr>
    </thead>
    <tbody>
      <CryptoItem
        v-for="crypto in cryptocurrencies"
        :key="crypto.id"
        :crypto="crypto"
      />
    </tbody>
  </table>
</template>

<style lang="scss">
.table {
  width: 90%;
  margin: auto;
}

.table-head {
  text-align: center;
  font-size: 1.5rem;
}
</style>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import CryptoItem from '../crypto/CryptoItem.vue';
import type { Cryptocurrency } from '../interfaces/interfaces';

export default defineComponent({
  name: 'CryptoTable',
  components: {
    CryptoItem,
  },
  props: {
    cryptocurrencies: {
      type: Array as PropType<Cryptocurrency[]>,
      required: true,
    },
  },
});
</script>
