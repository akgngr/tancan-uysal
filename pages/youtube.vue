<template>
  <seo
    title="youtube videlolarım"
    description="Prof. Dr. Tancan Uysal, videolarım"
  />
  <div class="flex h-60 items-center justify-center">
    <h1 class="text-xl font-semibold">Videolarım</h1>
  </div>
  <div class="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="item in data.items" :key="item.id.videoId">
      <iframe
        width="100%"
        height="315"
        :src="'https://www.youtube.com/embed/' + item.id.videoId"
        :title="item.snippet.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("youtube", () => $fetch("/api/youtube"));
</script>
