<template>
  <Nav />
  <drawer />
  <div class="mx-auto mt-24 w-11/12">
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
