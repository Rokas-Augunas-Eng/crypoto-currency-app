<template>
  <div class="failed-load-message">
    <div class="failed-fetch-message">
      <p>{{ customMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  customMessage: {
    type: String,
    required: true,
  },
});

const { customMessage } = props;
</script>

<style>
.failed-load-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
}

.failed-fetch-message {
  text-align: center;
  font-size: 2rem;
}
</style>
