<template>
  <table class="table table-hover" :class="{ loading: loading }">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" class="table-head">Crypto</th>
        <th scope="col" class="table-head">Price</th>
        <th scope="col" class="table-head">Volume 24 hours</th>
        <th scope="col" class="table-head">Change</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="crypto in cryptocurrencies" :key="crypto.id">
        <th scope="row" class="table-data">
          <img :src="crypto.logo" alt="Logo" class="crypto-logo" />
        </th>
        <td class="table-data">{{ crypto.name }}</td>
        <td class="table-data">$ {{ crypto.quote.USD.price }}</td>
        <td class="table-data">
          {{ crypto.quote.USD.volume_24h.toFixed(0) }}
        </td>
        <td class="table-data">
          <span
            class="change-value text-nowrap"
            :class="{
              'positive-change': crypto.quote.USD.percent_change_24h > 0,
              'negative-change': crypto.quote.USD.percent_change_24h < 0,
            }"
          >
            <svg
              v-if="crypto.quote.USD.percent_change_24h < 0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="arrow-down"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
            <svg
              v-else-if="crypto.quote.USD.percent_change_24h > 0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="arrow-up"
            >
              <path d="M7 14l5-5 5 5z" />
            </svg>
            {{ crypto.quote.USD.percent_change_24h.toFixed(2) }}%
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.table-head {
  text-align: center;
}

.table-data {
  text-align: center;
  vertical-align: middle;
}

.change-value {
  text-align: center;
}

.crypto-logo {
  max-width: 2.5rem;
  max-height: 2.5rem;
  margin: 0 auto;
}

.arrow-up {
  color: green;
  height: 4rem;
  width: 4rem;
}

.arrow-down {
  color: red;
  height: 4rem;
  width: 4rem;
}
</style>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import type { Cryptocurrency } from '../interfaces/interfaces';

export default defineComponent({
  name: 'CryptoList',
  props: {
    limit: {
      type: Number,
      default: 20,
    },
  },

  setup(props) {
    const cryptocurrencies = ref<Cryptocurrency[]>([]);
    const loading = ref(false);
    const page = ref(1);

    const fetchCryptocurrencies = async () => {
      try {
        loading.value = true;
        const response = await axios.get<Cryptocurrency[]>(
          `http://localhost:8000/latest?limit=${props.limit * page.value}`
        );
        console.log(response.data);

        cryptocurrencies.value = response.data;
        loading.value = false;
      } catch (error) {
        loading.value = false;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (scrollY + windowHeight >= bodyHeight && !loading.value) {
        page.value++;
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
    };
  },
});
</script>
