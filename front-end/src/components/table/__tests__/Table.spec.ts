import { shallowMount } from '@vue/test-utils';
import Table from '@/components/table/Table.vue';
import { expect, it, describe } from 'vitest';

describe('Table', () => {
  const tableItems = [
    { id: 1, name: 'Item 1', isMobile: false },
    { id: 2, name: 'Item 2', isMobile: true },
  ];

  const tableHeaders = [
    { name: 'Name', isMobile: false },
    { name: 'Mobile Only', isMobile: true },
  ];

  it('renders table headers correctly', () => {
    const wrapper = shallowMount(Table, {
      propsData: { tableItems, tableHeaders },
    });

    const thElements = wrapper.findAll('th');
    expect(thElements.length).toBe(tableHeaders.length);

    thElements.forEach((th, index) => {
      expect(th.text()).toBe(tableHeaders[index].name);
    });
  });

  it('hides mobile-only headers on desktop', () => {
    const wrapper = shallowMount(Table, {
      propsData: { tableItems, tableHeaders },
    });

    const mobileOnlyHeader = wrapper.find('.d-none.d-md-table-cell');
    expect(mobileOnlyHeader.exists()).toBe(true);

    const nonMobileOnlyHeader = wrapper.find(
      '.table-head:not(.d-none.d-md-table-cell)'
    );
    expect(nonMobileOnlyHeader.exists()).toBe(true);
  });
});
