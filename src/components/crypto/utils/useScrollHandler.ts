import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollHandler(loadDataFunction: () => Promise<void>) {
  const loadingMoreData = ref(false);
  const page = ref(1);
  const showButton = ref(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.documentElement.scrollHeight;
    showButton.value = window.scrollY >= 1000;

    if (scrollY + windowHeight >= bodyHeight && !loadingMoreData.value) {
      page.value++;
      loadingMoreData.value = true;
      loadDataFunction()
        .then(() => {
          loadingMoreData.value = false;
        })
        .catch(() => {
          loadingMoreData.value = false;
        });
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    loadingMoreData,
    page,
    showButton,
  };
}
