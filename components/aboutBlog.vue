<template>
  <div class="my-8 px-8 py-8 md:px-16">
    <client-only placeholder="Yükleniyor...">
      <NuxtLink href="/blogs"
        ><h2 class="pb-6 text-3xl font-semibold">
          Şeffaf plaklarla ortodontik tedavi ile ilgili yazılarım.
        </h2></NuxtLink
      >
      <div class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          v-for="blog in data.blogs"
          :key="blog.id"
          :title="blog.title"
          :description="blog.description"
          :img="blog.image"
          :slug="blog.slug"
          :publishedAt="blog.publishedAt"
        />
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getBlogs {
    blogs(first: 3, orderBy: publishedAt_ASC) {
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
