<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-3.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4"
  >
    <div class="mx-auto flex w-11/12 flex-wrap items-center justify-between">
      <a href="/" class="flex items-center">
        <img
          src="~/assets/tancan_logo.png"
          class="h-8 md:h-10"
          alt="Tancan Uysal Logo"
        />
      </a>
      <div class="hidden md:order-2 lg:flex">
        <ui-btn-primary link="/iletisim" text="Randevu Al" />
      </div>
      <div class="block text-center lg:hidden">
        <button
          class="focus:ring-gary-300 mr-2 mb-2 rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-4"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
        id="navbar-sticky"
      >
        <ui-nav-ul>
          <li><ui-nav-link link="/" text="Anasayfa" /></li>
          <li><ui-nav-link link="/hakkimda" text="Hakkımda" /></li>
          <li><ui-nav-link link="/invisalign" text="Şeffaf Plaklar" /></li>
          <li><ui-nav-link link="/after-before" text="Referanslar" /></li>
          <li><ui-nav-link link="/blog" text="Blog" /></li>
          <li><ui-nav-link link="/iletisim" text="İletişim" /></li>
        </ui-nav-ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style>
.logo {
  @apply text-xl md:text-2xl lg:text-3xl;
}
.logo img {
  @apply h-8 md:h-12;
}
</style>
