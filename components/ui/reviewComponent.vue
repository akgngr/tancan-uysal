<template>
  <div class="py-4">
    <h2 class="pb-2">{{ isimSoyisim }}</h2>
    <span class="flex gap-2 pb-3" v-if="yildiz === '1'">
      <svg-yellow-star />
      <svg-gray-star />
      <svg-gray-star />
      <svg-gray-star />
      <svg-gray-star />
    </span>
    <span class="flex gap-2 pb-3" v-else-if="yildiz === '2'">
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-gray-star />
      <svg-gray-star />
      <svg-gray-star />
    </span>
    <span class="flex gap-2 pb-3" v-else-if="yildiz === '3'">
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-gray-star />
      <svg-gray-star />
    </span>
    <span class="flex gap-2 pb-3" v-else-if="yildiz === '4'">
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-gray-star />
    </span>
    <span class="flex gap-2 pb-3" v-else>
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
      <svg-yellow-star />
    </span>
    <p :class="{ hidden: show === true }">
      {{ yorum.slice(0, 200) + "..." }}
      <button class="text-green-700" @click="show = !show">Devamı</button>
    </p>
    <p :class="{ hidden: show === false }">
      {{ yorum }}
      <button class="text-red-500" @click="show = !show">Gizle</button>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isimSoyisim: {
      type: String,
      required: true,
    },
    yildiz: {
      type: Number,
      required: true,
    },
    yorum: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
