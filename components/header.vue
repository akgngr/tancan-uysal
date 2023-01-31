<template>
  <div>
    <NuxtImg
      class="w-full md:hidden"
      :src="data.sETTINGS.images[0].url"
      :alt="data.sETTINGS.images[0].title"
    />
    <NuxtImg
      class="hidden w-full md:block"
      :src="data.sETTINGS.images[1].url"
      :alt="data.sETTINGS.images[1].title"
    />
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query Settings {
    sETTINGS(where: { id: "clafui19h0em10bw5rojmlqv4" }) {
      data
      images {
        id
        url(transformation: { document: { output: { format: webp } } })
        title
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
</script>
