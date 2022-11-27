<template>
  <NuxtLink
    :href="link"
    class="block rounded py-2 pl-3 pr-4 text-base text-gray-700 md:p-0"
    aria-current="page"
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
