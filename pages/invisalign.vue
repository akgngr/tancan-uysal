<template>
  <seo
    title="invisalign"
    description="Şeffaf plaklarla ortodontik tedavi, invisalign."
  />
  <header
    class="custom-img relative flex h-[90vh] items-center justify-center bg-cover bg-fixed bg-top bg-no-repeat"
  >
    <div
      class="absolute top-0 left-0 h-full w-full bg-blue-900 opacity-40"
    ></div>
    <div
      class="absolute left-10 z-10 mx-auto flex w-8/12 flex-col justify-center text-center md:left-48"
    >
      <h1
        class="w-full text-left text-5xl font-semibold uppercase text-gray-100 drop-shadow-2xl md:text-center md:text-4xl lg:text-6xl"
      >
        Şeffaf plaklarla ortodontik tedavi
      </h1>
      <h2
        class="text-left text-5xl font-semibold uppercase text-yellow-800 md:text-center"
      >
        invisalign.
      </h2>
    </div>
  </header>

  <section class="mx-auto my-32 grid w-11/12 gap-6 md:grid-cols-2">
    <div class="prose">
      <h2 class="text-3xl">Şeffaf Plaklarla Ortodontik Tedavi Nedir?</h2>
      <p>
        Dişleriniz çarpık mı? Bu durumdan hiç hoşnut değilmisiniz? Diş telleri
        taktırmak istemiyormusunuz? Diş tellerinin verdiği ağrılar gözünüzü mü
        korkutuyor ve estetik kaygı mı yaşıyorsunuz? Ama yinede dişlerinize
        estetik bir görüntü vermek mi istiyorsunuz? O zaman Şeffaf Plaklarla
        Ortodontik Tedavi tam sizin için.
      </p>
      <p>
        Şeffaf Plaklarla metal veya şeffaf diş teli gibi estetiksel bir kaygı
        yaşanmaz. Aile, iş ve sosyal yaşantınıza hiçbir kaygı duymadan devam
        edebilirsiniz. Özellikle çocukların ve gençlerin diş çarpıklığı
        tedavilerinde yaşadıkları psikolojik sorunların önüne geçmektedir.
      </p>
      <p>
        Dişlerin üzerini kaplayan plak tabakası sayesinde ağızda ortodontik
        müdahaleler yapılır. Şeffaf plaklar kolayca çıkarılıp takılabilen,
        yumuşak yapısıyla kullanımı kolay bir tedavi aygıtı olup tamamen şeffaf
        yapısıyla da oldukça estetik bir tedavi aracıdır.
      </p>
    </div>
    <div>
      <img
        src="/img/beautiful-smiling-turkish-woman-is-holding-an-invi.png"
        alt="Şeffaf Plaklarla Ortodontik Tedavi Nedir?"
      />
    </div>
  </section>

  <section
    class="mx-auto my-32 flex w-11/12 flex-col-reverse items-center gap-6 md:grid md:grid-cols-2"
  >
    <div>
      <img
        src="/img/transparent-aligners-and-storage-case-invisible-b-2022-11-23-22-05-35-utc.jpg"
        alt="Şeffaf Plakların Hazırlanış Süreci"
      />
    </div>
    <div class="prose">
      <h2>Şeffaf Plakların Hazırlanış Süreci</h2>
      <p>
        Diş hekimi ağızdan ölçü alır. Bu bilgileri üç boyutlu tarama yöntemi ile
        bilgisayara aktarır.
      </p>
      <p>
        Bilgisayar üzerinde dişlerin hareketine dair tedavi plan senaryosu elde
        edilir. Bu senaryolara göre tedavi rotası belirlenir. Üç boyutlu
        yazıcıdan istenen diş kalıpları çıkarılır. Elde edilen bu kalıpların
        üzerine esnek şeffaf plak uygulanır.
      </p>
      <p>
        Tedavi aşamalarında kat edilecek yol için her bir adıma uygun plak
        hazırlanır. Böylece tedavide kullanılacak plaklar hazırlanmış olur.
      </p>
    </div>
  </section>
  <section class="prose mx-auto my-32 w-11/12 gap-6">
    <h2>Şeffaf Plaklarla Tedavi Süreci Nasıl İlerler?</h2>
    <h3>Tedavinin Başlaması</h3>
    <p>
      Ölçüler alındıktan sonra bilgilerin bilgisayara girilmesi ve kalıpların
      hazırlanma sürelerini göz önünde bulundurursak şeffaf plaklar yaklaşık iki
      hafta sonra elde edilir. Yani plaklar iki hafta sonra alınıp ağıza
      yerleştirilir ve tedaviye başlanmış olunur.
    </p>
    <h3>Kullanım</h3>
    <p>
      Şeffaf plaklarda normal ortodontik tedaviden farklı olarak braketler
      kişinin kendisine özel olarak 3 boyutlu yazıcılar tarafından üretilir.
      Plaklar ağızda bulundukları sürece dişleri istenen harekete doğru
      yönlendirir. 15 günde bir plak değiştirilir ve her değişimde, yani her
      yeni plakta dişler istenen yöne doğru planlı bir şekilde ilerletilir.
    </p>
    <p>
      Tedavi süresince hastalar plakları çok rahat bir şekilde kendileri takip
      çıkarabilirler, oldukça basittir, bir plağı günde yaklaşık 20 saat
      kullanırlar, plağı kullandıktan yaklaşık iki hafta sonra bir sonraki
      adımın plağı kullanılmak üzere verilir. Bu plağı yine aynı şekilde iki
      hafta boyunca günde 20 saat gibi bir süre ile takarak kullanırlar.
    </p>
    <h3>Tedavinin Süresi</h3>
    <p>
      Ortalama tedavi süresi, problemlerin yaklaşık %60’ı sekiz ila on ayda
      biter. Kalan %40 ise on iki ila on dört aylık tedavilerle sonlanabilir.
      Maksimum 16-18 ay süren ender durumlar da vardır.
    </p>
  </section>
  <section class="prose mx-auto my-32 w-11/12">
    <h2>Sıkça Sorulan Sorular?</h2>
    <div v-for="item in accordion" :key="item.id">
      <ui-accordion-component :title="item.title" :body="item.body" />
    </div>
  </section>
  <section>
    <about-blog />
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      show: false,
      accordion: [
        {
          id: 1,
          title: "Tedavi Süreci",
          body: "Bilgisayarlı tomografi ile dişlerinizin görüntüsü alınır Bilgisayar destekli tasarım yazılımıyla dişlerinizin hareketleri tahmin edilir Eğer gerekliyse tedavi planınız gözden geçirilir Tedavinin her aşamasında ağzınızın kalıpları alınır Şeffaf düzelticiler yapılır Her bir düzeltici yaklaşık iki hafta takılır. Smile İzmir Estetik Diş Kliniği Ortodonti birimimizde kliniklerimizin direktörü Prof. Dr. Tancan UYSAL ve ekibi tarafından hastalarımıza en uygun tedavi seçeneği klinik muayene sonrasında hastalarımıza sunulmakta ve hastalarımızın tercihine göre tedavileri yapılmaktadır.",
        },
        {
          id: 2,
          title:
            "Şeffaf Plak Kullanımının Sabit Braketlere Göre Avantajları Nelerdir?",
          body: "Plağın diş tellerine göre avantajları çok fazladır. Yapılan bütün hareketler üç boyutlu simülasyonlarda öncelikle belirlenir. Ondan sonrasında istenmeyen bir hareket oluşma miktarı oldukça düşüktür, riski pek yoktur, yapılan çalışmalarda tellere göre dişlere daha az zarar veriyor ya da daha çok zarar veriyor diye bir bulguya rastlanmamıştır, diş tellerinden bu noktada farkı yoktur. Oldukça şeffaftırlar, estetik bir görünümleri vardır, dışardan bakılınca kullanıcının tedavisinin sürüp sürmediği, tedavi olunduğu yada tedavinin hangi sürecinde olunduğu anlaşılamaz. Hastanın kendine özgü birebir üretildiği için problem yaşanmaz. Sosyal yaşantıyı sekteye uğratmaz, şeffaf plak kullanan biri toplum içindeki gülme konuşma gibi doğal davranışlarını rahatlıkla sürdürebilir. Konuşurken ağzını eliyle kapatmaz. Resim çekilirken telleri gözükmesin diye gülmemezlik yapmaz, hayatin doğal akışında rahatlıkla yaşama devam eder, bir tedavi süreci içindedir ama yaşam kalitesi düşmez. Yemeklerde çıkarılabildiği için rahatlıkla istenen her şey yenebilir, tellere göre en büyük avantajlarından biri budur. Diğer büyük avantajı temizlik çok daha kolaydır. Tellerde dişlere giren besinleri temizlemek zorken şeffaf plaklar çıkarılabildiğinden, kullanıcı rahatlıkla tüm dişlerini temizleyebilir. Estetik görünümüyle sosyal yaşantıyı etkilememesi ve çıkarılabilmesiyle istenen yiyeceklerin tüketilip diş hijyeninin rahatlıkla sağlanabilmesi plak kullanımının en büyük avantajlarıdır. Tedavi sürecinde kliniğe gelindiğinde plak değişimleri kısa sürede yapılır, metal braketlerdeki gibi tel ayarı, sıkılaştırılması, değişimi gibi tedavi uygulamaları olmayacağı için klinikte geçen süre tellere göre oldukça azdır. Seyahat sırasında sürdürebilen bir süreç şeffaf plak tedavisi. Eğer tedavi elveriyorsa hastaya birkaç plak verilip süreç kendisinin eline verilebilir, kliniğe geliş süresi azalır, tedavi uygunsa plakları hasta arka arkaya kullanabilir. Şeffaf plaklar bilgisayar teknolojisi ile üretildikleri için istenmeyen bölgelere gereksiz kuvvet uygulamaz, istenen bölgelere gerektiği kadar kuvvet uygularlar.",
        },
        {
          id: 3,
          title: "Şeffaf Plak Kullanımının Dezavantajları Nelerdir?",
          body: "Şeffaf plak kullanıcıları plağı ilk taktıklarında tükürük salgısında bir miktar artış olabiliyor, alışma sürecinde peltek konuşma görülebiliyor. Fiyat olarak sabit braketlere göre daha maliyetli olmasını da bir olumsuzluk olarak sayabiliriz.",
        },
        {
          id: 4,
          title:
            "Şeffaf Plak Kullanımı ile Diş Teli Kullanımı Arasındaki Farklar Nelerdir?",
          body: "Metal braketlerde telin koptuğu, çıktığı durumlar olur. Bu durumlarda kliniğe gidilir, diş hekimi teli yerine yerleştirir. Bu gibi olası senaryolarda klinik ziyaretleri şart olur. Şeffaf plak kullanıcısı diş hekimine bağlı değil daha bağımsız bir tedavi süreci geçirir. Seyahat edebilir, hasta yada yoğun olduğunda kliniğe gelmesi zaruri durumlar yaşamadığı için ajandasına sadece kontrol randevularını yazmalıdır, bunun dışında ekstra klinik ziyareti yaşamak durumunda kalmaz. Yine tedavinin estetik yapısından dolayı Plak kullanıcıları tedavinin ne zaman biteceğine dair ilgili değildirler. Metal braket kullanan hastaların hemen hemen her muayenede sorduğu soru tellerin ne zaman çıkacağıdır, oysa invisalign teknolojisinde hastalar tedavi süresini dert etmez. Diğer bir dezavantaj teller kırıldığında diş etini yara yapabiliyor, ağızda bulunan metal aygıtlar yada teller nedeniyle batma veya yara olma durumu söz konusu, çoğunlukla hekim müdahalesi gerekiyor, plaklarda böyle durumlar görülmüyor, müdahale edilmesi gereken durum çok nadir olur, diş ve dişetini rahatsız etmez. Braketlerle uygulanan tedaviye göre, daha konforlu daha rahat kullanım ve yarasız acısız bir tedavi süreci sunar.Metal braketlerle tedaviye göre daha acısız ve ağrısız bir süreçtir.",
        },
        {
          id: 5,
          title: "Şeffaf Plak Kullanmak İçin Yaş Sınırı Var Mı?",
          body: "Her yaş grubunda rahatlıkla kullanılabilir. İnvisalign kullanımında yaş sınırı yoktur. Çocuklar, gençler ve yetişkinler şeffaf plak kullanabilir. Önemli olan hekim ile işbirliği içinde düzenli olarak plağın kullanılmasıdır.",
        },
        {
          id: 6,
          title: "Şeffaf Plak Kullanırken Nelere Dikkat Edilmeli?",
          body: "Şeffaf plak kullanılırken hekimle işbirliği içinde olunmalı, plak düzenli bir şekilde kullanılarak ağızda bulundurulmalıdır. Plağın esnek yapısı gereği aşırı sıcak içecek tüketilmemelidir. Plak ısıdan dolayı esneyerek formunu kaybedebilir.",
        },
        {
          id: 7,
          title: "Plak Kullanılırken Sigara İçilebilir mi?",
          body: "Aşırı çay, kahve, sigara tüketimi plaklarda sararma yapabilir. Fakat plaklar 15 gün sonra değiştirildiği için renginin düzeltilmesi gibi bir çaba gerekmez. Oysa sabit ortodontik tedavide ücret vererek seanslarda dişlerinizi temizlenmesinin gerektiği durumlar olabilir.",
        },
        {
          id: 8,
          title:
            "İnvisalign Tedavisi Öncesinde Genel Diş Muayenesi Yaptırmak Gerekir mi?",
          body: "İnvisalign Tedavisi Öncesinde Genel Diş Muayenesi Yaptırmak Gerekir mi? Tedaviye başlamadan önce diş muayenesi olup dişlerde gereken dolgu işleminin, diş taşı temizliğinin, çürüklerin temizlenmiş olması, ağız bakımının yapılmış olması gerekir. Tedaviye başlandıktan sonra bu gibi işlemler yapılmaz. Ancak implant gibi protetik işlemler tedavi sonrasına bırakılır. Ortognatik cerrahi operasyonu öncesinde de şeffaf plak tedavisi uygulanabilir ve operasyon sonrası ağızdaki problemler giderilmiş olur.",
        },
        {
          id: 9,
          title:
            "İnvisalign, Sabit Braketlere Göre Daha Maliyetli Bir Tedavi Mi?",
          body: "Önceden İnvisalign daha maliyetli bir tedavi yöntemiydi. Sadece bir firma bu işi yapıyordu, daha pahalı idi, bugün fiyatlar daha uygun, ulaşılabilir düzeyde bir maliyeti var. Yine de tellere göre daha maliyetli ama arada uçurum yok. Burada maliyet hesabı yapılırken avantaj dezavantaj kıyaslaması işin içine katılmalı. İnvisalign bir miktar daha maliyetli ama çok daha estetik ve çok daha kolay kullanımlı.",
        },
      ],
    };
  },
  setup() {
    definePageMeta({
      layout: "landing-page",
    });
  },
};
</script>

<style>
.custom-img {
  background-image: url(/img/seffaf-plaklarla-orthodontik-tedavi.jpeg);
}
</style>
