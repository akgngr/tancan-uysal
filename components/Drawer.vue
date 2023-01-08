<template>
  <!-- drawer component -->
  <div
    id="drawer-example"
    class="fixed z-40 h-screen w-60 -translate-x-full overflow-y-auto bg-white p-4 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-label"
  >
    <button
      type="button"
      data-drawer-dismiss="drawer-example"
      aria-controls="drawer-example"
      class="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>

    <ui-nav-ul>
      <li><ui-nav-link link="/" text="Anasayfa" /></li>
      <li><ui-nav-link link="/hakkimda" text="Hakkımda" /></li>
      <li><ui-nav-link link="/invisalign" text="Şeffaf Plaklar" /></li>
      <li><ui-nav-link link="/referanslar" text="Referanslar" /></li>
      <li><ui-nav-link link="/blog" text="Blog" /></li>
      <li><ui-nav-link link="/iletisim" text="İletişim" /></li>
    </ui-nav-ul>
    <ui-btn-primary link="/iletisim" text="Randevu Al" />
  </div>
</template>
