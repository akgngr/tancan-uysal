<template>
  <div>
    <h1>
      Mesajınız Başarılı bir şekilde gönderilmiştir. 5 saniye içinde anasayfaya
      yönelndiriliyorsunuz.
      <a href="/">Yönlendirilmez iseniz lütfen buraya tıklayınız.</a>
    </h1>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
    }, 5000);
  },
};
</script>
