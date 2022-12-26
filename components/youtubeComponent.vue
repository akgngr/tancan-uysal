<template>
  <div class="my-32 mx-auto w-11/12">
    <div class="mx-auto mb-8">
      <NuxtLink to="/youtube"
        ><h2 class="text-2xl font-semibold">Videolarım</h2></NuxtLink
      >
    </div>
    <div class="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3" v-if="data">
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
    <div class="my-8 text-center">
      <ui-btn-primary link="/youtube" text="Diğer Videolar" />
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("youtube", () => $fetch("/api/youtbethre"));
</script>
