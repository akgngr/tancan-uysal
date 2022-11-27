<template>
  <seo />
  <LazyAboutComponent />
  <lazy-blog-component />
  <lazy-iletisim-component />
  <lazy-img-comparison />
  <youtube-component />
  <LazyHarita />
</template>
<script setup lang="ts">
definePageMeta({
  layout: "homelayout",
});
</script>
