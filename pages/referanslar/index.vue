<template>
  <seo
    title="Şeffaf plaklarla yapılan ortodontik tedavilerin sonuçları"
    description="Şeffaf plaklarla yapılan ortodontik tedavilerin sonuçları, hastalarımın tedaviye başlamadan ki ilk halleri ve tedaviden sonraki son halleri."
  />
  <client-only>
    <div class="flex h-60 items-center justify-center">
      <h1 class="text-3xl font-bold">Referanslar</h1>
    </div>

    <div
      class="beforeafter my-8 mx-auto grid grid-cols-1 justify-center gap-4 px-4 lg:grid-cols-2"
    >
      <div v-for="afterBofer in data.afterBoferes" :key="afterBofer.id">
        <img-comparison-slider class="rendered text-center">
          <figure slot="first" class="after">
            <img
              :width="afterBofer.beforeImage.width"
              :height="afterBofer.beforeImage.height"
              :src="afterBofer.beforeImage.url"
              :alt="afterBofer.beforeImage.title"
            />
          </figure>
          <figure slot="second" class="before">
            <img
              :width="afterBofer.afterImage.width"
              :height="afterBofer.afterImage.height"
              :src="afterBofer.afterImage.url"
              :alt="afterBofer.afterImage.title"
            />
          </figure>
        </img-comparison-slider>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
const query = gql`
  query getAfterBoferes {
    afterBoferes {
      afterImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, height: 320, width: 480 } }
          }
        )
        width
        height
        title
      }
      beforeImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, height: 320, width: 480 } }
          }
        )
        width
        height
        title
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
.beforeafter div {
  @apply flex justify-center;
}
</style>
