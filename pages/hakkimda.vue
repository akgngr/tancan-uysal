<template>
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
        url
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
