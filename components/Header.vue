<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <ul class="flex gap-8">
        <li>
          <NuxtLink to="/">
            <span
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Home</span
            >
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolios">
            <span
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Portfolios</span
            >
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search">
            <span
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Search</span
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
