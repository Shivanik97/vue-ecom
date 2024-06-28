<template>
  <div class="relative overflow-hidden">
    <img
      :src="course.picture"
      alt="Course Image"
      class="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-110"
    />
    <button
      @click="toggleFav(course)"
      class="absolute top-2 right-2 bg-white p-2 rounded-full border focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :fill="course.isFav ? 'rgb(255,0,0)' : 'none'"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        :class="{ 'text-red-500': course.isFav, 'text-gray-400': !course.isFav }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  </div>
  <div class="p-6 flex flex-col justify-between">
    <div>
      <h2 class="text-xl font-semibold mb-2">{{ $t(course.title) }}</h2>
      <p class="text-gray-700">{{ course.desc }}</p>
    </div>

    <a
      :href="course.url"
      target="_blank"
      class="flex items-center justify-center mt-4 bg-[#5f458f] text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors duration-300 focus:outline-none"
    >
      Start Course
    </a>
  </div>
</template>

<script setup lang="ts">
import { auth0 } from '../../config/authConfig'
import { useCoursesStore } from '../../stores/courses'

const courseStore = useCoursesStore()
const { loginWithRedirect, isAuthenticated, logout, user } = auth0
const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})

const toggleFav = (course: any) => {
  if (isAuthenticated.value) {
    courseStore.toggleFav(course.id)
  } else {
    loginWithRedirect()
  }
}

const startCourse = (course: any) => {
  if (isAuthenticated.value) {
    console.log('course', course)
  } else {
    loginWithRedirect()
  }
}
</script>

<style scoped></style>
