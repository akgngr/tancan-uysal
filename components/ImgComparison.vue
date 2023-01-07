<template>
  <client-only>
    <div class="mx-auto my-32 w-11/12">
      <div class="mx-auto py-2">
        <NuxtLink to="/after-before">
          <h2 class="text-3xl font-semibold">Referanslarımız</h2>
        </NuxtLink>
      </div>

      <div
        class="my-8 mx-auto grid grid-cols-1 justify-center gap-4 lg:grid-cols-3"
      >
        <img-comparison-slider
          v-for="afterBofer in data.afterBoferes"
          :key="afterBofer.id"
          class="rendered text-center"
        >
          <figure slot="first" class="after">
            <img
              :width="afterBofer.beforeImage.width"
              :height="afterBofer.beforeImage.height"
              :src="afterBofer.beforeImage.url"
            />
          </figure>
          <figure slot="second" class="before">
            <img
              :width="afterBofer.afterImage.width"
              :height="afterBofer.afterImage.height"
              :src="afterBofer.afterImage.url"
            />
          </figure>
        </img-comparison-slider>
      </div>
      <div class="my-8 text-center">
        <ui-btn-primary link="/after-before" text="Diğer Referanslar" />
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
const query = gql`
  query getAfterBoferes {
    afterBoferes(first: 3, orderBy: publishedAt_DESC) {
      id
      afterImage {
        url
      }
      beforeImage {
        url
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);

useHead({
  script: [
    {
      src: "https://unpkg.com/img-comparison-slider@7/dist/index.js",
      defer: true,
      body: true,
      type: "module",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/img-comparison-slider@7/dist/styles.css",
    },
  ],
});
</script>
<style>
.before,
.after {
  margin: 0;
}

.before figcaption,
.after figcaption {
  background: #fff;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #2e3452;
  opacity: 0.8;
  padding: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 100%;
}
.before figcaption {
  left: 12px;
}

.after figcaption {
  right: 12px;
}
.custom-animated-handle {
  transition: transform 0.2s;
}

.slider-with-animated-handle:hover .custom-animated-handle {
  transform: scale(1.2);
}
</style>
