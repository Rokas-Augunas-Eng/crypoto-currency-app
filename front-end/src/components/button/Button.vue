<template>
  <button class="button" @click="handleClick">
    <slot>{{ name }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: true,
    },
    name: {
      type: String,
      default: 'Click',
      required: true,
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      this.onClick(event);
    },
  },
});
</script>
<style lang="scss">
.button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: $primaryColor;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: $secondaryColor;
  transition: ease-in-out 400ms;
}
</style>
