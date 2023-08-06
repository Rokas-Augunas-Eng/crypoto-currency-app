<template>
  <tr>
    <th scope="row" class="table-data">
      <img :src="items.logo" alt="Logo" class="crypto-logo" />
    </th>
    <td class="table-data">{{ items.name }}</td>

    <td class="table-data d-none d-md-table-cell">
      $ {{ items.quote.USD.price.toFixed(4) }}
    </td>
    <td class="table-data d-none d-md-table-cell">
      {{ items.quote.USD.volume_24h.toFixed(0) }}
    </td>

    <td class="table-data">
      <span class="change-column">
        <component :is="getArrowComponent()" />
        <span class="percentage"
          >{{ items.quote.USD.percent_change_24h.toFixed(2) }}%</span
        >
      </span>
    </td>
  </tr>
</template>

<style>
.table-data {
  text-align: center;
  vertical-align: middle;
  max-width: 8rem;
}

.percentage {
  min-width: 3.5rem;
}

.crypto-logo {
  max-height: 2.5rem;
  margin: 0 auto;
}

.change-column {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ArrowUpIcon from '../icons/ArrowUpIcon.vue';
import ArrowDownIcon from '..//icons/ArrowDownIcon.vue';

export default defineComponent({
  name: 'TableItems',
  components: {
    ArrowUpIcon,
    ArrowDownIcon,
  },
  props: {
    items: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  methods: {
    getArrowComponent() {
      return this.items.quote.USD.percent_change_24h < 0
        ? 'ArrowDownIcon'
        : 'ArrowUpIcon';
    },
  },
});
</script>
