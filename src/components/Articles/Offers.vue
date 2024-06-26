<template>
  <div class="flex justify-center items-center pt-3">
    <p class="text-3xl font-sans">{{ $t('articles') }}</p>
  </div>
  <div class="space-y-6 p-8">
    <div
      v-for="article in ArticleStore.articles"
      :key="article.id"
      class="bg-white shadow-md rounded-lg p-6 relative"
    >
      <h2 class="text-2xl font-semibold mb-4">{{ article.title }}</h2>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <span class="text-gray-700 font-bold">{{ article.Author }}</span>
          <a :href="article.linkedIn" target="_blank" class="text-blue-500 hover:underline">
            <svg
              class="h-4 w-4 fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.103-.897-2-2-2s-2 .897-2 2v5.5h-3v-10h3v1.528c.74-1.106 2.084-1.528 3.5-1.528 2.485 0 4.5 2.015 4.5 4.5v5.5z"
              />
            </svg>
          </a>
        </div>
        <a
          :href="article.url"
          target="_blank"
          class="bg-[#5f458f] text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors duration-300 focus:outline-none"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '../../stores/articles'
const ArticleStore = useArticlesStore()
</script>

<style scoped></style>
