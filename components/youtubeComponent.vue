<template>
  <div class="my-32 mx-auto w-11/12">
    <div class="mx-auto mb-8">
      <NuxtLink to="/youtube"
        ><h2 class="text-2xl font-semibold">Videolarım</h2></NuxtLink
      >
    </div>
    <div class="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/purX5xIMX7M"
          title="Şeffaf Plaklarla (invisalign) Ortodontik Tedaviler (Çağla ile Yeni Bir Gün Programı)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/9B7IzgGK2ck"
          title="Kanal D Özlem Yıldız ve Dr Biran Ekici Konuştukça Programında Şeffaf Plakları Konuştuk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/p7AKWu9sRbQ"
          title="Star TV'de Burcu Esmersoy'un Konuğu olduk ve Şeffaf Plaklar Hakkında Bilinmeyen Her Şeyi Konuştuk."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/RByBA54G8VM"
          title="Onedio'da Sosyal Medyadan Gelen Soruları Yanıtladık."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
    <div class="my-8 text-center">
      <ui-btn-primary link="/youtube" text="Diğer Videolar" />
    </div>
  </div>
</template>
