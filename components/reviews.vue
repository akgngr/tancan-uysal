<template>
  <div class="bg-gray-100 py-32">
    <div class="mx-auto w-11/12">
      <a href="/google-reviews">
        <h2 class="text-2xl font-semibold">Hasta Görüşleri</h2>
      </a>
      <div class="grid md:grid-cols-2 lg:grid-cols-3">
        <ui-review-component
          v-for="review in data.googleReview"
          :key="review.id"
          :isimSoyisim="review.isimSoyisim"
          :yildiz="review.yildiz"
          :yorum="review.yorum"
        />
      </div>
      <div class="mt-8 text-center">
        <ui-btn-primary link="/google-reviews" text="Diğer Görüşler" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query getReviews {
    googleReview(first: 3, orderBy: publishedAt_ASC) {
      id
      isimSoyisim
      yildiz
      yorum
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
