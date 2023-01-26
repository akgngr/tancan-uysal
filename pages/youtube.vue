<template>
  <seo
    title="youtube videlolarım"
    description="Prof. Dr. Tancan Uysal, videolarım"
  />
  <div class="flex h-60 items-center justify-center">
    <h1 class="text-xl font-semibold">Videolarım</h1>
  </div>
  <div class="mb-12 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="item in video?.items" :key="item.id.videoId">
      <iframe
        width="100%"
        height="315"
        :src="'https://www.youtube.com/embed/' + item.id.videoId"
        :title="item.snippet.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        lazzy
      ></iframe>
    </div>
  </div>
  <div v-if="video" class="flex w-full justify-center gap-4 py-8">
    <button v-if="!video.prevPageToken" disabled class="btn-disabled">
      Geri
    </button>
    <button v-else @click="fetchYoutube(video.prevPageToken)" class="btn">
      Geri
    </button>
    <button v-if="!video.nextPageToken" disabled class="btn-disabled">
      İleri
    </button>
    <button v-else @click="fetchYoutube(video.nextPageToken)" class="btn">
      İleri
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "CAIQAQ",
      video: null,
    };
  },
  mounted() {
    this.fetchYoutubeVideo(this.page);
    console.log(this.video);
  },
  methods: {
    async fetchYoutubeVideo(page) {
      await fetch(`/api/youtube?page=${page}`)
        .then((response) => response.json())
        .then((data) => (this.video = data));
    },
    async fetchYoutube(page) {
      await this.fetchYoutubeVideo(page);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.btn {
  @apply rounded-md border border-gray-400 py-2 px-4 font-semibold text-gray-600;
}
.btn-disabled {
  @apply rounded-md border border-gray-400 bg-gray-400 py-2 px-4 font-semibold text-gray-200;
}
</style>
