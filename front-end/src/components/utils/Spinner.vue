<template>
  <div class="loading">
    <div class="spinner">
      <div class="spinner-border" role="status"></div>
    </div>
  </div>
</template>

<style lang="scss">
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-border {
  color: $primaryColor;
  height: 3rem;
  width: 3rem;
}
</style>
