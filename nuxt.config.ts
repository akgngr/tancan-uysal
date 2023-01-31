
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
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
    'nuxt-simple-sitemap',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes:[
        "/blog/bunu-okumadan-dis-tellerinizi-taktirmayin",
        "/blog/caprasik-dislerin-olusturacagi-sikintilar",
        "/blog/seffaf-plak-tedavinizde-basarili-olmak-icin-6-ipucu",
        "/blog/seffaf-plak-ya-da-yaygin-bilinen-adiyla-invisalign-tedavileri-nedir-2023",
        "/blog/invisalign-seffaf-plaklarin-kullaniminda-siklikla-karsilasilan-problemler-ve-cozum-onerileri",
        "/blog/invisalign-seffaf-plaklarin-temizlik-ve-bakimi-nasil-yapilir-bilmeniz-gereken-her-sey",
        "/blog/seffaf-plaklari-kullanirken-olusabilecek-agiz-kurulugu-nasil-onlenir",
        "/blog/dis-telleri-ve-seffaf-plaklar-seffaf-plaklar-metal-braketler-kadar-etkili-mi",
        "/blog/seffaf-plaklarin-dis-tellerine-gore-avantaj-ve-dezavantajlari-nelerdir",
        "/blog/invisalign-seffaf-plaklari-kullanirken-spor-yapilabilir-mi",
        "/blog/seffaf-plaklar-hangi-ortodontik-problemleri-duzeltebilir-yada-duzeltemez",
        "/blog/invisalign-seffaf-plaklarin-calismasi-ne-kadar-surer-tedavi-nasil-hizlanir",
        "/blog/2023-yili-invisalign-seffaf-plak-fiyati-nekadar",
        "/blog/invisalign-seffaf-plaklar-derin-kapanisi-deep-bite-duzeltilebilir-mi",
        "/blog/invisalign-seffaf-plaklar-derin-kapanisi-deep-bite-duzeltebilir-mi-2023",
        "/blog/invisalign-acik-kapanis-problemimi-duzeltebilir-mi",
        "/blog/seffaf-plak-tedavisi-agri-yapar-mi",
        "/blog/gencler-ve-cocuklar-icin-invisalign-seffaf-plaklar",
      ]
    }
  },
  sitemap: {
    hostname: 'https://tancanuysal.com',
    exclude: [
        '/api/**'
    ]
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.HYGRAPH}`
      }
    },
  },
  image: {
    domains: ["https://media.graphassets.com"]
  },
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap" },
      ],
      meta: [
        { name:"google-site-verification", content: "rVjh1vaS7XrikvMdxEXP7fj6g-cCusbFYTTWuzFTLIE" },
        { name: "msvalidate.01", content: "360908889422609AB204567849C02D10" }
      ],
      htmlAttrs: {
        lang: 'tr'
      }
    },
    
  },
  runtimeConfig: {
    public: {
      smtp: process.env.SMTP,
      email: process.env.EMAIL,
      pass: process.env.PASS,
      port: process.env.PORT
    }
  }
});