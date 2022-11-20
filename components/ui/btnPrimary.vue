<template>
  <NuxtLink
    class="rounded-sm bg-yellow-800 py-3 px-6 text-white hover:bg-yellow-700"
    :href="link"
    >{{ text }}</NuxtLink
  >
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
