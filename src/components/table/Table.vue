<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th
          v-for="(header, index) in tableHeaders"
          :key="index"
          class="table-head"
          :class="getTableHeaderClasses(header.isMobile)"
        >
          {{ header.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TableItems v-for="item in tableItems" :key="item.id" :items="item" />
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
import TableItems from '../table/TableItems.vue';
import type { TableHeqaderProps } from '../interfaces/interfaces';

export default defineComponent({
  name: 'Table',
  components: {
    TableItems,
  },
  props: {
    tableItems: {
      type: Array as PropType<any[]>,
      required: true,
    },
    tableHeaders: {
      type: Array as PropType<TableHeqaderProps[]>,
      required: true,
    },
  },
  methods: {
    getTableHeaderClasses(isMobile: boolean) {
      return isMobile && 'd-none d-md-table-cell';
    },
  },
});
</script>
