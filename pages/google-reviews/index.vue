<template>
  <seo
    title="Google Yorumları"
    description="Google haritalardaki hakkımda yapılan yorumlar."
  />
  <div class="flex h-60 w-full items-center justify-center">
    <h1 class="text-3xl font-bold">Hasta Görüşleri</h1>
  </div>
  <div class="grid grid-cols-3 gap-2">
    <ui-review-component
      v-for="review in data.googleReview"
      :key="review.id"
      :isimSoyisim="review.isimSoyisim"
      :yildiz="review.yildiz"
      :yorum="review.yorum"
    />
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getReviews {
    googleReview {
      id
      isimSoyisim
      yildiz
      yorum
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
