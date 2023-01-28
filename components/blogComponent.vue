<template>
  <div class="px-8 py-16 md:px-16">
    <client-only placeholder="Yükleniyor...">
      <NuxtLink href="/blogs/1"
        ><h2 class="pb-6 text-3xl font-semibold">Blog Yazılarım</h2></NuxtLink
      >
      <p>
        Bu bölümde beyaz estetik, pembe estetik, yüz estetiği, gülümseme
        estetiği ve ortodonti tedavisi hakkında bilgi edinebilirsiniz.
      </p>
      <div class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-3">
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
    blogs(first: 3, orderBy: publishedAt_DESC) {
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
  }
`;

const { data } = await useAsyncQuery(query);
</script>
