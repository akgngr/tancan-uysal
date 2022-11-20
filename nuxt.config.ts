// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/apollo', '@nuxt/image-edge'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cla77gago0ye301uof4bk3yaf/master'
      }
    },
  },
  image: {
    domains: ["https://media.graphassets.com"]
  },
  app: {
    head: {
      link: [
        { rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap"},
      ],
    }
  }
})
