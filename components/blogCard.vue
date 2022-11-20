<template>
  <div class="rounded-md shadow-xl">
    <nuxt-img
      class="rounded-tl-lg rounded-tr-lg"
      :src="img.url"
      :alt="img.title"
    />
    <div class="prose-sm p-4">
      <h2 class="font-semibold">{{ title }}</h2>
      <span class="m-0 p-0">{{ date }}</span>
      <p>{{ description }}</p>
      <ui-link-btn :link="'/blog/' + slug" text="Devamını Oku" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";

moment.locale("tr");

const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: String,
    required: true,
  },
});

const date = moment(props.publishedAt).fromNow();
</script>
