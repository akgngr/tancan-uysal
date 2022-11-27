<template>
  <Head>
    <Meta name="description" :content="description" />
    <Meta
      name="keywords"
      content="prof. dr. tancan uysal, ortodontist, şeffaf plaklarla tedavi"
    />
    <Meta name="author" content="Prof. Dr. Tancan UYSAL" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="img" />
    <Title>{{ title }}</Title>
  </Head>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Prof. Dr. Tancan UYSAL",
  },
  description: {
    type: String,
    required: true,
    default:
      "Çarpık dişler önemli bir sağlık sorunudur, çünkü insanların gülüşlerinin güzelliği bilinçli ve özgüvenli olmalarına neden olur ve bozukluğu ağız sağlığının ötesine geçen bir takım sağlık riskleri oluşturur.",
  },
  img: {
    type: String,
    required: false,
    default: "/img/tancan-uysal.webp",
  },
});
</script>
