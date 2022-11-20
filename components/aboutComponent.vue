<template>
  <div class="mx-auto flex w-11/12 flex-wrap gap-8 py-44">
    <article class="prose lg:prose-lg">
      <h1>Prof. Dr. Tancan UYSAL, kimdir?</h1>
      <span v-html="data.page.description"></span>
    </article>

    <nuxt-picture
      class="w-full flex-1"
      :src="data.page.image.url"
      :placeholder="[100, 50, 10]"
    />
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getAbout {
    page(where: { id: "cla8nuodj0h7g0aumvztks1tw" }) {
      description
      image {
        url
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
