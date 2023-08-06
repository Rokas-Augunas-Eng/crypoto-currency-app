import CryptoList from '@/components/crypto/CryptoList.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

describe('CryptoList component', () => {
  it('should display Spinner when loading is true', async () => {
    const wrapper = mount(CryptoList, {
      data() {
        return {
          loading: true,
          cryptocurrencies: [],
        };
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent({ name: 'Spinner' }).exists()).toBe(true);
  });

  it('should not render a table when the cryptocurrency array is empty', async () => {
    const errorMessage = 'Error';
    const wrapper = mount(CryptoList, {
      data() {
        return {
          loading: false,
          cryptocurrencies: [],
          errorMessage,
        };
      },
    });

    expect(wrapper.findComponent({ name: 'Table' }).exists()).toBe(false);
  });
});
