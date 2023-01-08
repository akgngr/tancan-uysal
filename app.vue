<template>
  <NuxtLayout>
    <Suspense>
      <NuxtPage />
    </Suspense>
  </NuxtLayout>
  <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-TTV72JM"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>
  <!-- End Google Tag Manager (noscript) -->
</template>
<script lang="ts" setup>
useHead({
  script: [
    { src: "https://www.googletagmanager.com/gtag/js?id=G-12XQV3KZDC" },
    {
      children:
        "window.dataLayer = window.dataLayer || []; function\n" +
        "gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',\n" +
        "'G-12XQV3KZDC');",
    },
    {
      children:
        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TTV72JM');",
      body: true,
    },
  ],
});
</script>
