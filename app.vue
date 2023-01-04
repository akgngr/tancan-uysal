<template>
  <NuxtLayout>
    <Suspense>
      <NuxtPage />
    </Suspense>
  </NuxtLayout>
  <Head>
    <!-- Google tag (gtag.js) -->
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-12XQV3KZDC"
    />
    <Script>
      window.dataLayer = window.dataLayer || []; function
      gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
      'G-12XQV3KZDC');
    </Script>
  </Head>
</template>
