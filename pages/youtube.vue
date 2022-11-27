<template>
  <Head>
    <Meta
      name="google-signin-client_id"
      content="563627820654-9o3ei1d2nlesf6f7gee5c08sj3airlho.apps.googleusercontent.com"
    />
  </Head>
  <h1>Youtube</h1>
</template>

<script setup>
await fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6IIzbXrGQnfjsMKX8i2vWQ&maxResults=25&type=video&key=AIzaSyAWXoaE4ezl8xA2UtfeuFCwhYGRhzpNRyc",
  {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer ya29.a0AeTM1ifwPIQlQkIyswIW7DYJUONzzuzqLwBzhviJUdNurxbIi3T0POvDtfZ9ExMoCFzyzq2vEZ7ImD2znZet7mU1OY0D9nFN2jwu-66UT6NpPeehJaY1qChvSqt6FGfLR2EIUQcU0KbbAZsEBmjQqplCwTidaCgYKAT0SARISFQHWtWOmBDTDzqPYOT7f2gTY8qBRBg0163",
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data));
</script>
