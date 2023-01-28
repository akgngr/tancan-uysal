<template>
  <seo
    title="Blog yazılarım"
    description="Ortondik tedaviler hakkında kaleme aldığım blog yazılarım."
  />
  <div class="flex h-60 items-center justify-center">
    <h1 class="text-3xl font-bold">Blog Yazılarım</h1>
  </div>
  <div
    v-if="data.blogs"
    class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
  >
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
  <div v-else>
    <h3>Şuanda Burada Her hangi bir içerik bulunmamaktadır.</h3>
  </div>

  <pagination
    :totalPosts="Number(data.blogsConnection.aggregate.count)"
    :postsPerPage="9"
  />
</template>
<script lang="ts" setup>
const route = useRoute();

const query = gql`
  query getBlogs($skip: Int!) {
    blogs(orderBy: publishedAt_DESC, first: 9, skip: $skip) {
      description
      id
      publishedAt
      slug
      title
      image {
        size
        title
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, height: 320, width: 480 } }
          }
        )
      }
    }
    blogsConnection {
      pageInfo {
        pageSize
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`;

let variables = { skip: Number(route.params.page) };

if (variables.skip === 1) {
  variables.skip = 0;
} else {
  if (variables.skip === 2) {
    variables.skip = 9;
  } else {
    variables.skip = (variables.skip - 1) * 9;
  }
}

const { data } = await useAsyncQuery(query, variables);
</script>

<style scoped>
.btn {
  @apply rounded-md border border-gray-400 py-2 px-4 font-semibold text-gray-600;
}
.btn-disabled {
  @apply rounded-md border border-gray-400 bg-gray-400 py-2 px-4 font-semibold text-gray-200;
}
</style>
