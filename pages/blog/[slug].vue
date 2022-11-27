<template>
  <seo
    :title="data.blog.title"
    :description="data.blog.description"
    :img="data.blog.image.url"
  />
  <article class="prose mx-auto">
    <nuxt-img :src="data.blog.image.url" :alt="data.blog.image.title" />
    <h1>{{ data.blog.title }}</h1>
    <span> {{ moment(data.blog.publishedAt).format("L") }}</span>
    <span v-html="data.blog.body.html"></span>
  </article>
</template>

<script lang="ts" setup>
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
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
