<template>
  <h2 class="accordion-header mb-0 mt-0">
    <button
      class="relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-yellow-800 transition focus:outline-none"
      type="button"
      @click="show = !show"
    >
      {{ title }}
    </button>
  </h2>
  <div id="iki" v-if="show === true">
    <div class="accordion-body py-4 px-5">
      {{ body }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
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
