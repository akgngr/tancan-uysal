<template>
  <Nav />
  <div class="mb-20"></div>

  <drawer />
  <Header />
  <div>
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
