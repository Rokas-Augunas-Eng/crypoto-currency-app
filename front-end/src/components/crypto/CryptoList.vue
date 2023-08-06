<template>
  <Spinner v-if="loading" />
  <FailedFetchMessage v-if="errorMessage" :custom-message="errorMessage" />

  <template v-if="!loading && cryptocurrencies.length > 0">
    <Table :tableItems="cryptocurrencies" :tableHeaders="tableHeaders" />
  </template>

  <Button v-if="showButton" :name="'Up'" :onClick="scrollToTop" />

  <Spinner v-if="loadingMoreData" />
</template>

<script lang="ts">
import { fetchCryptocurrencies } from '@/api/cryptoService';
import { defineComponent, onMounted, ref } from 'vue';
import Button from '../button/Button.vue';
import type {
  Cryptocurrency,
  TableHeqaderProps,
} from '@/interfaces/interfaces';
import Table from '../table/Table.vue';
import FailedFetchMessage from '../utils/FetchFailedMessage.vue';
import Spinner from '../utils/Spinner.vue';
import { scrollToTop } from '../utils/scrollToTop';
import { useScrollHandlerandCallFunction } from './utils/handleScrollandCallFunction';

export default defineComponent({
  setup() {
    const cryptocurrencies = ref<Cryptocurrency[]>([]);
    const loading = ref(true);
    const errorMessage = ref();

    const tableHeaders: TableHeqaderProps[] = [
      { name: '', isMobile: true },
      { name: 'Crypto', isMobile: true },
      { name: 'Price', isMobile: false },
      { name: 'Volume 24 hours', isMobile: false },
      { name: 'Change', isMobile: true },
    ];

    const memoizedFetchCryptocurrenciesData = ref<() => Promise<void>>(
      async () => {
        try {
          const data = await fetchCryptocurrencies(page.value);
          cryptocurrencies.value = cryptocurrencies.value.concat(data);
          loading.value = false;
        } catch (error) {
          errorMessage.value = error;
          loading.value = false;
        }
      }
    );

    onMounted(() => {
      memoizedFetchCryptocurrenciesData.value();
    });

    const { loadingMoreData, page, showButton } =
      useScrollHandlerandCallFunction(memoizedFetchCryptocurrenciesData.value);

    return {
      cryptocurrencies,
      loading,
      loadingMoreData,
      tableHeaders,
      errorMessage,
      page,
      scrollToTop,
      showButton,
    };
  },
  components: {
    Table,
    Spinner,
    FailedFetchMessage,
    Button,
  },
});
</script>
