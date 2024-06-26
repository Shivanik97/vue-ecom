<template>
  <div class="flex justify-center items-center pt-6">
    <p class="text-3xl font-sans">WISHLIST COURSES</p>
  </div>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="course in courseStore.favs"
      :key="course.id"
      class="bg-white shadow-md rounded-lg overflow-hidden group relative"
    >
      <ProductDetail :course="course" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from '../../stores/courses'
import ProductDetail from "../Products/ProductDetail.vue"
const courseStore = useCoursesStore()
</script>

<style scoped></style>
