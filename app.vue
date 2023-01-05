<template>
  <NuxtLayout>
    <Suspense>
      <NuxtPage />
    </Suspense>
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  script: [
    { src: 'https://www.googletagmanager.com/gtag/js?id=G-12XQV3KZDC' },
    { children: 'window.dataLayer = window.dataLayer || []; function\n' + 'gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\',\n' + '\'G-12XQV3KZDC\');' },
  ],

});
</script>