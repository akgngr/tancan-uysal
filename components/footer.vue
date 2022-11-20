<template>
  <div class="mx-auto grid w-11/12 grid-cols-1 pt-20 pb-8 md:grid-cols-3">
    <div class="relative col-span-2 space-y-2">
      <h2 class="font-semibold">{{ data.sETTINGS.data.isim }}</h2>
      <p>{{ data.sETTINGS.data.mail }}</p>
      <p>{{ data.sETTINGS.data.adres }}</p>
      <p>
        <a target="_blank" :href="data.sETTINGS.data.doktor_takvimi"
          >Doktor Takvimi</a
        >
      </p>
      <p>
        <a :href="'tel:+' + data.sETTINGS.data.telefon">
          {{ "+" + data.sETTINGS.data.telefon }}</a
        >
      </p>
    </div>
    <div>
      <p>
        <a
          class="text-2xl font-semibold text-blue-800"
          target="_blank"
          :href="
            'https://www.instagram.com/explore/tags/' +
            data.sETTINGS.data.hashtag
          "
          >{{ "#" + data.sETTINGS.data.hashtag }}</a
        >
      </p>
      <div class="flex gap-4 pt-4">
        <span class="block h-12 w-12">
          <svg-linkedin />
        </span>
        <span class="block h-12 w-12">
          <svg-facebook />
        </span>
        <span class="block h-12 w-12">
          <svg-instagram />
        </span>
        <span class="block h-12 w-12">
          <svg-twitter />
        </span>
        <span class="block h-12 w-12">
          <svg-youtube />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  query Settings {
    sETTINGS(where: { id: "clafui19h0em10bw5rojmlqv4" }) {
      data
      images {
        id
        url
        title
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
