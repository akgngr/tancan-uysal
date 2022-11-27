<template>
  <div
    class="mx-auto grid w-11/12 grid-cols-1 gap-8 py-24 md:grid-cols-2 md:py-44"
  >
    <article class="prose lg:prose-lg">
      <h1>Prof. Dr. Tancan UYSAL, kimdir?</h1>
      <span v-html="data.page.description"></span>
      <ui-link-btn link="/hakkimda" text="Devamını Oku" />
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
