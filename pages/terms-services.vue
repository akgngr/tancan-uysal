<template>
  <seo :title="data.page.title" :description="data.page.description" />
  <div>
    <div class="flex h-60 items-center justify-center">
      <h1 class="text-3xl font-semibold">{{ data.page.title }}</h1>
    </div>
    <article class="prose mx-auto pt-8 prose-h2:text-2xl lg:prose-lg">
      <span v-html="data.page.body.html"></span>
    </article>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getAbout {
    page(where: { id: "clazjn4cywjih0auyuryhispp" }) {
      title
      description
      body {
        html
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
