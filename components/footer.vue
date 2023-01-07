<template>
  <div
    class="grid grid-cols-1 border-t border-gray-50 bg-gray-100 px-8 pt-10 pb-8 md:grid-cols-3"
  >
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
    <div class="mt-20 flex flex-col pb-4 md:mt-0 md:pb-2">
      <p class="flex justify-center md:justify-start">
        <a
          class="text-base font-semibold text-blue-800 md:text-lg lg:text-xl xl:text-2xl"
          target="_blank"
          :href="
            'https://www.instagram.com/explore/tags/' +
            data.sETTINGS.data.hashtag
          "
          >{{ "#" + data.sETTINGS.data.hashtag }}</a
        >
      </p>
      <div class="flex justify-center gap-4 pt-4 md:justify-start">
        <span class="block h-10 w-10">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tancan-uysal-29023046/"
          >
            <svg-linkedin
          /></a>
        </span>
        <span class="block h-10 w-10">
          <a target="_blank" href="https://www.facebook.com/tancan.uysal">
            <svg-facebook
          /></a>
        </span>
        <span class="block h-10 w-10">
          <a
            target="_blank"
            href="https://www.instagram.com/profdrtancanuysal/"
          >
            <svg-instagram
          /></a>
        </span>
        <span class="block h-10 w-10">
          <a target="_blank" href="https://twitter.com/tancanuysal">
            <svg-twitter
          /></a>
        </span>
        <span class="block h-10 w-10">
          <a target="_blank" href="https://www.youtube.com/c/TancanUysal">
            <svg-youtube
          /></a>
        </span>
        <span class="block h-10 w-10">
          <a target="_blank" href="https://www.tiktok.com/@tancanuysal">
            <svg-tiktok
          /></a>
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
