<template>
  <Spinner v-if="loading" />
  <FailedFetchMessage
    v-else-if="cryptocurrencies.length === 0"
    :custom-message="customMessage"
  />

  <template v-if="!loading && cryptocurrencies.length > 0">
    <CryptoTable :cryptocurrencies="cryptocurrencies" />
  </template>

  <Spinner v-if="loadingMoreData" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import type { Cryptocurrency } from '../interfaces/interfaces';
import CryptoTable from '../table/CryptoTable.vue';
import Spinner from '../utils/Spinner.vue';
import FailedFetchMessage from '../utils/FetchFailedMessage.vue';

export default defineComponent({
  name: 'CryptoList',
  props: {
    limit: {
      type: Number,
      default: 20,
    },
    customMessage: {
      type: String,
      default: 'Sorry failed to load the crypto currency. Please try again',
    },
  },

  setup(props) {
    const cryptocurrencies = ref<Cryptocurrency[]>([]);
    const loading = ref(true);
    const loadingMoreData = ref(false);

    const page = ref(1);

    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get<Cryptocurrency[]>(
          `http://localhost:8000/latest?limit=${props.limit * page.value}`
        );

        cryptocurrencies.value = response.data;
        loading.value = false;
      } catch (error) {
        loading.value = false;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= bodyHeight && !loading.value) {
        page.value++;
        loadingMoreData.value = true;
        fetchCryptocurrencies();
      }
    };

    onMounted(() => {
      fetchCryptocurrencies();
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      cryptocurrencies,
      loading,
      loadingMoreData,
    };
  },
  components: {
    CryptoTable,
    Spinner,
    FailedFetchMessage,
  },
});
</script>
