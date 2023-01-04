<template>
  <seo
    title="İletişim"
    description="Prof. Dr. Tancan Uysal, iletişim ve randevu"
  />
  <div class="flex h-60 items-center justify-center">
    <h1 class="text-xl font-semibold">İletişim ve Randevu</h1>
  </div>
  <div class="mb-36 flex flex-col-reverse gap-4 md:grid md:grid-cols-2">
    <div class="mt-12 md:mt-0"><harita /></div>
    <div class="order-last">
      <input type="text" class="hidden" v-model="surname" name="surname" />
      <div class="form-group">
        <label for="isim">İsim Soyisim</label>
        <input type="text" v-model="name" id="isim" required />
      </div>
      <div class="flex w-full gap-6">
        <div class="form-group">
          <label for="email">E-posta</label>
          <input type="email" v-model="email" id="email" />
        </div>
        <div class="form-group">
          <label for="telefon">Telefon</label>
          <input type="text" v-model="telefon" id="telefon" />
        </div>
      </div>
      <div class="form-group">
        <label for="mesaj">Mesajınız</label>
        <textarea
          v-model="mesaj"
          id="mesaj"
          cols="80"
          rows="6"
          required
        ></textarea>
      </div>
      <button
        class="rounded-md bg-yellow-800 px-8 py-3 text-white hover:bg-yellow-600"
        @click="sendMail()"
      >
        Gönder
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      name: null,
      email: null,
      telefon: null,
      mesaj: "",
      error: "",
      surname: null,
    };
  },
  methods: {
    async sendMail() {
      if (this.surname === null) {
        try {
          await $fetch("/api/sendmail", {
            method: "POST",
            body: {
              name: this.name,
              email: this.email,
              telefon: this.telefon,
              mesaj: this.mesaj,
            },
          });
          return this.$router.push("/success");
        } catch (err) {
          this.error =
            "Bir hata ile karşılaşıldı lütfen daha sonra tekrar deneyiniz!" +
            err;
        }
      } else {
        console.error("Error");
      }
    },
  },
};
</script>
<style scoped>
.form-group {
  @apply mb-4 flex w-full flex-col gap-3;
}
.form-group label {
  @apply font-semibold text-gray-600;
}
.form-group input,
.form-group textarea {
  @apply w-full border border-gray-100 py-2 px-3;
}
</style>
