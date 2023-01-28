<template>
  <div
    class="mx-auto grid w-11/12 grid-cols-1 gap-8 py-24 md:grid-cols-2 md:py-44"
  >
    <article class="lg:prose-md prose">
      <h1 class="text-yellow-800">Prof. Dr. Tancan UYSAL, kimdir?</h1>
      <span v-html="data.page.description"></span>
      <ui-btn-primary link="/hakkimda" text="Devamını Oku" />
    </article>

    <img
      class="w-full flex-1 rounded-md"
      :src="data.page.image.url"
      :alt="data.page.image.title"
    />
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getAbout {
    page(where: { id: "cla8nuodj0h7g0aumvztks1tw" }) {
      description
      image {
        title
        url(transformation: { document: { output: { format: webp } } })
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
