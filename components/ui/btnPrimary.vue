<template>
  <NuxtLink
    :href="link"
    class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 p-0.5 text-sm font-medium text-gray-900 no-underline hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-400 group-hover:from-yellow-500 group-hover:to-yellow-600 dark:text-white dark:focus:ring-yellow-800"
  >
    <span
      class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
    >
      {{ text }}
    </span>
  </NuxtLink>
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
