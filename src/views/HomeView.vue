<template>
  <div>
    <div class="bg-no-repeat bg-contain bg-center w-full"></div>
    <div
      class="bg-[url('../assets/white.png')] mt-12 bg-no-repeat bg-contain bg-center w-full h-[750px]"
    ></div>
    <div class="flex items-center">
      <router-link
        class="flex items-center ml-10 focus:outline-none text-white bg-[#5f458f] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-xl rounded-md text-sm px-6 py-4"
        to="/courses"
        >Get started<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 ml-2 animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          /></svg></router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
