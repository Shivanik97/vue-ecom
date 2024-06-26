import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
  const count = ref(0)
  const courses = ref([
    {
      id: 1,
      picture:
        'https://vueschool.io/storage/media/8dd2c203b82732eb20a89b408c39dbdd/vue-js-3-fundamentals-with-the-composition-api.jpg',
      title: 'Vue.js 3 Fundamentals with the Composition API',
      desc: "Learn the fundamental concepts and get up and running with Vue.js 3 with the Composition API. Perfect if you have not touched Vue before, or you're just getting started!",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api'
    },
    {
      id: 2,
      picture:
        'https://vueschool.io/storage/media/d54747c9b842f611b65d14cc865d403f/Common-Vue.js-Mistakes-and-How-to-Avoid-Them-01.png',
      title: 'Common Vue.js Mistakes and How to Avoid Them',
      desc: 'Building apps with Vue is a delight but there are common gotchas you should look out for! With this course, learn the warning signs and ways to fix them avoid mistakes',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/common-vue-js-mistakes-and-how-to-avoid-them'
    },
    {
      id: 3,
      picture:
        'https://vueschool.io/storage/media/0aa2cfd06e2b4367c1e140d30639da58/I18N-transparent.png',
      title: 'Internationalization with vue-i18n',
      desc: 'Master internationalization and learn how to create multilingual websites and vue.js applications with vue-i18n. With Vue i18n, we can automatically easily translate and transform text, numbers, dates, currencies, and so much more.',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/internationalization-with-vue-i18n'
    },
    {
      id: 4,
      picture:
        'https://vueschool.io/storage/media/cb103360d9341bd311b96974a83a3a91/vuejs-components-fundamentals.png',
      title: 'Vue.js Components Fundamentals',
      desc: 'Components are the puzzle pieces of a Vue.js website. Learn the fundamental and important concept of Vue.js components in this course. Components combine blocks of HTML, JavaScript, and CSS. And as a result, they allow us to easily encapsulate.',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/vuejs-components-fundamentals'
    },
    {
      id: 5,
      picture:
        'https://vueschool.io/storage/media/8c592d0a0989fdfe23390eb0e5da7ac2/vueschool_scoped-slots-course-transparent.png',
      title: 'Reusable Vue.js Components with Slots',
      desc: 'Learn how to master slots and scoped slots, to build flexible and reusable vue.js components.',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/reusable-vuejs-components-with-slots'
    },
    {
      id: 6,
      picture:
        'https://vueschool.io/storage/media/9ea899b785de8ee088c77a71366e9678/master-the-vuejs-router-by-building-a-travel-app.png',
      title: 'Vue Router for Everyone',
      desc: 'Learn how to build powerful Single Page Applications in Vue with the Vue Router.',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/vue-router-4-for-everyone'
    },
    {
      id: 7,
      picture:
        'https://vueschool.io/storage/media/6a4143864b2793123492ea9c1706d2ea/pinia-course-feature-image.png',
      title: 'Pinia: The Enjoyable Vue Store',
      desc: 'Learn how to use Pinia for global state management in your Vue 3 applications.',
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/pinia-the-enjoyable-vue-store'
    },
    {
      id: 8,
      picture: 'https://vueschool.io/storage/media/b03768120c9df78a79b40fc6d5e71d3b/vitest.png',
      title: 'Rapid Testing with Vitest',
      desc: "Vitest is a testing framework built for Vite! It's blazing fast test runs and zero config setup Vue.js 3 projects.",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/rapid-testing-with-vitest'
    },
    {
      id: 9,
      picture: 'https://vueschool.io/storage/media/b03768120c9df78a79b40fc6d5e71d3b/vitest.png',
      title: 'Rapid Testing with Vitest',
      desc: "Vitest is a testing framework built for Vite! It's blazing fast test runs and zero config setup Vue.js 3 projects.",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/rapid-testing-with-vitest'
    },
    {
      id: 10,
      picture: 'https://vueschool.io/storage/media/b03768120c9df78a79b40fc6d5e71d3b/vitest.png',
      title: 'Rapid Testing with Vitest',
      desc: "Vitest is a testing framework built for Vite! It's blazing fast test runs and zero config setup Vue.js 3 projects.",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/rapid-testing-with-vitest'
    },
    {
      id: 11,
      picture: 'https://vueschool.io/storage/media/b03768120c9df78a79b40fc6d5e71d3b/vitest.png',
      title: 'Rapid Testing with Vitest',
      desc: "Vitest is a testing framework built for Vite! It's blazing fast test runs and zero config setup Vue.js 3 projects.",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/rapid-testing-with-vitest'
    },
    {
      id: 12,
      picture: 'https://vueschool.io/storage/media/b03768120c9df78a79b40fc6d5e71d3b/vitest.png',
      title: 'Rapid Testing with Vitest',
      desc: "Vitest is a testing framework built for Vite! It's blazing fast test runs and zero config setup Vue.js 3 projects.",
      isFav: false,
      inCart: false,
      url: 'https://vueschool.io/courses/rapid-testing-with-vitest'
    }
  ])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, courses }
})
