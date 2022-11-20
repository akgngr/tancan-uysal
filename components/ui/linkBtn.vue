<template>
  <NuxtLink
    class="bg-yellow-800 py-2 px-2 rounded-md text-white hover:bg-yellow-700"
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
