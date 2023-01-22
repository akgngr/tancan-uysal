<template>
  <seo
    title="Prof. Dr. Tancan UYSAL | Şeffaf Plaklarla Ortodontik Tedavi"
    description="Prof. Dr. Tancan UYSAL, İzmir Şeffaf Plaklarla Ortodontik Tedavi, Invisalign"
  />
  <AboutComponent />
  <invisalign />
  <LazyYoutubeComponent />
  <iletisim-component />
  <referanslar />
  <reviews />
  <blog-component />
  <Harita />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";

const youtubeComponent = defineAsyncComponent(
  () => import("../components/youtubeComponent.vue")
);

definePageMeta({
  layout: "homelayout",
});
</script>
