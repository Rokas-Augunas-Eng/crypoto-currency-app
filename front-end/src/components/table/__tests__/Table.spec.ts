import { shallowMount } from '@vue/test-utils';
import Table from '@/components/table/Table.vue';
import { expect, it, describe } from 'vitest';

describe('Table', () => {
  const tableItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
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
});
