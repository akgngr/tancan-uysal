<template>
  <article class="prose lg:prose-xl mx-auto">
    <nuxt-img :src="data.blog.image.url" :alt="data.blog.image.title" />
    <h1>{{ data.blog.title }}</h1>
    <time>{{ data.blog.publishedAt }}</time>
    <span v-html="data.blog.body.html"></span>
  </article>
</template>

<script lang="ts" setup>
const route = useRoute();

const query = gql`
  query getBlog($slug: String!) {
    blog(where: { slug: $slug }) {
      id
      title
      slug
      publishedAt
      body {
        html
      }
      image {
        size
        title
        url
      }
    }
  }
`;
const variables = { slug: route.params.slug };
const { data } = await useAsyncQuery(query, variables);
</script>
