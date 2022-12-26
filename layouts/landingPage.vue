<template>
  <Nav />
  <drawer />
  <div class="mt-20 w-full">
    <slot />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://unpkg.com/flowbite@1.5.4/dist/flowbite.js",
      defer: true,
      body: true,
    },
  ],
});
</script>
