<template>
  <div class="my-6 rounded-md shadow-md">
    <nuxt-img
      class="w-full rounded-tl-lg rounded-tr-lg"
      :src="img.url"
      :alt="img.title"
    />
    <div class="prose-sm p-4">
      <a :href="'/blog/' + slug"
        ><h2 class="font-semibold">{{ title }}</h2></a
      >
      <span class="m-0 p-0">{{ date }}</span>
      <p>{{ description }}</p>
      <ui-btn-primary :link="'/blog/' + slug" text="Devamını Oku" />
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
