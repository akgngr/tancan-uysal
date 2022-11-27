<template>
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" v-if="data">
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
const { data } = await useAsyncData("youtube", () =>
  $fetch("/api/youtubethre")
);
</script>
