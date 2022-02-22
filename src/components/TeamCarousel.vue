<template>
  <Splide :options="{ rewind: true, focus: 'center', width: '400px' }">
    <SplideSlide>
      <img src="https://via.placeholder.com/400" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://via.placeholder.com/400" />
    </SplideSlide>
  </Splide>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
</script>
