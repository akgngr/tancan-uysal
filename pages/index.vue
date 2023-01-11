<template>
  <SchemaOrgLocalBusiness
    name="Prof. Dr. Tancan UYSAL | Şeffaf Plaklarla Ortodontik Tedavi"
    image="/logo.png"
    :address="{
      streetAddress: 'Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B',
      addressLocality: 'Bayraklı',
      addressRegion: 'İzmir',
      postalCode: '35510',
      addressCountry: 'TR',
    }"
  />
  <SchemaOrgWebSite
    name="Prof. Dr. Tancan UYSAL | Şeffaf Plaklarla Ortodontik Tedavi"
  />
  <SchemaOrgWebPage />
  <seo
    title="Prof. Dr. Tancan UYSAL | Şeffaf Plaklarla Ortodontik Tedavi"
    description="İzmir Şeffaf Plaklarla Ortodontik Tedavi"
  />
  <pre></pre>
  <AboutComponent />
  <invisalign />
  <youtubeComponent />
  <iletisim-component />
  <referanslar />
  <reviews />
  <blog-component />
  <Harita />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";

const youtubeComponent = defineAsyncComponent(
  () => import("../components/youtubeComponent.vue")
);

definePageMeta({
  layout: "homelayout",
});
</script>
