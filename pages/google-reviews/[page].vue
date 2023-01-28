<template>
  <seo
    title="Google Yorumları"
    description="Google haritalardaki hakkımda yapılan yorumlar."
  />
  <div class="flex h-60 w-full items-center justify-center">
    <h1 class="text-3xl font-bold">Hasta Görüşleri</h1>
  </div>
  <div class="grid gap-2 md:grid-cols-3">
    <ui-review-component
      v-for="review in data?.googleReview"
      :key="review.id"
      :isimSoyisim="review.isimSoyisim"
      :yildiz="review.yildiz"
      :yorum="review.yorum"
    />
  </div>
  <pagination
    :totalPosts="Number(data?.googleReviewConnection.aggregate.count)"
    :postsPerPage="9"
  />
</template>

<script lang="ts" setup>
const route = useRoute();

const query = gql`
  query getReviews($skip: Int!) {
    googleReview(orderBy: publishedAt_DESC, first: 9, skip: $skip) {
      id
      isimSoyisim
      yildiz
      yorum
    }
    googleReviewConnection {
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
