<template>
  <div class="py-6">
    <ul class="flex w-full justify-center gap-4">
      <li
        class="border border-gray-300 py-2 px-4 shadow-sm"
        v-for="number in pageNumbers"
        :key="number"
      >
        <NuxtLink :to="`${number}`">{{ number }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  postsPerPage: {
    type: Number,
    required: true,
  },
  totalPosts: {
    type: Number,
    required: true,
  },
});

const pageNumbers = [];

for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
  pageNumbers.push(i);
}
</script>
