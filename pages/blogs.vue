<template>
  <div class="flex h-60 items-center justify-center">
    <h1 class="text-3xl font-bold">Blog Yazılarım</h1>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <client-only placeholder="Yükleniyor...">
      <BlogCard
        v-for="blog in data.blogs"
        :key="blog.id"
        :title="blog.title"
        :description="blog.description"
        :img="blog.image"
        :slug="blog.slug"
        :publishedAt="blog.publishedAt"
      />
    </client-only>
  </div>
</template>
<script lang="ts" setup>
const query = gql`
  query getBlogs {
    blogs(orderBy: publishedAt_ASC) {
      description
      id
      publishedAt
      slug
      title
      image {
        size
        title
        url
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
