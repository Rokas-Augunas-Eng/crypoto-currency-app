import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '@/components/button/Button.vue';

describe('Button component', () => {
  it('renders button with a correct name prop', async () => {
    const name = 'Test Button';
    const wrapper = mount(Button, {
      props: {
        onClick: () => {},
        name: name,
      },
    });

    const button = wrapper.get('button');
    expect(button.text()).toBe(name);
  });
});
