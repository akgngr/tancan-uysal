<template>
  <seo
    title="Prof. Dr. Tancan UYSAL Kimdir?"
    description="1976 yılında Bursa Karacabey’de doğdu. İlkokulu Bilecik Edebali İlköğretim Okulunda, Ortaokulu Bilecik Anadolu Lisesi’nde bitirdi. Lise öğrenimini Bursa Karacabey Lisesinde birincilikle tamamladı. 1994 yılında girdiği Gazi Üniversitesi Diş Hekimliği Fakültesinden 1999 yılında dönem birincisi olarak mezun oldu."
  />
  <div>
    <div class="flex h-60 items-center justify-center">
      <h1 class="text-3xl font-semibold">Prof. Dr. Tancan UYSAL Kimdir?</h1>
    </div>
    <NuxtImg
      class="mx-auto"
      :src="data.page.image.url"
      :alt="data.page.image.title"
    />
    <article class="prose mx-auto pt-8 prose-h2:text-2xl lg:prose-lg">
      <h2>Prof. Dr. Tancan UYSAL</h2>
      <span v-html="data.page.body.html"></span>
    </article>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getAbout {
    page(where: { id: "cla8nuodj0h7g0aumvztks1tw" }) {
      title
      description
      body {
        html
      }
      image {
        url(transformation: { document: { output: { format: webp } } })
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
