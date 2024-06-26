import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {

  const articles = ref([
    {
      id: 1,
      title: 'Mastering Advanced Component Patterns in Vue.js 3',
      Author: 'Sumanth Thallpally',
      linkedIn: 'https://www.linkedin.com/in/sumanth469/',
      url: 'https://medium.com/@sumanth469/mastering-advanced-component-patterns-in-vue-js-3-5953e3f95e0d'
    },
    {
      id: 2,
      title: 'State-Driven CSS Variables in Vue 3',
      Author: 'Shivani Kuntumalla',
      linkedIn: 'https://www.linkedin.com/in/shivanik1997/',
      url: 'https://medium.com/@kuntumallashivani/state-driven-css-variables-in-vue-3-fda05c28d81a'
    },
    {
      id: 3,
      title: 'Elevating Vue 3 Applications with defineAsyncComponent and Suspense',
      Author: 'Revanth Kumar Patha',
      linkedIn: 'https://www.linkedin.com/in/revanth-kumar-9246841a0/',
      url: 'https://medium.com/@revanthkumarpatha/elevating-vue-3-applications-with-defineasynccomponent-and-suspense-1ae04f5cb30f'
    },
    {
      id: 4,
      title: 'Exploring Custom Directives in Vue 3: A Practical Guide',
      Author: 'Revanth Kumar Patha',
      linkedIn: 'https://www.linkedin.com/in/revanth-kumar-9246841a0/',
      url: 'https://medium.com/@revanthkumarpatha/exploring-custom-directives-in-vue-3-a-practical-guide-921e437d00fa'
    },
    {
      id: 5,
      title:
        'Revolutionizing Vue.js State Management: A Deep Dive into defineModel in Vue 3 Script Setup',
        Author: 'Revanth Kumar Patha',
        linkedIn: 'https://www.linkedin.com/in/revanth-kumar-9246841a0/',
      url: 'https://medium.com/@revanthkumarpatha/welcome-to-the-next-level-of-vue-js-912f0587fc3e'
    },
    {
      id: 6,
      title: 'Unleashing the Power of Pinia: Effortless State Management for Vue.js 3',
      Author: 'Raju Ponnamanda',
      linkedIn: 'https://www.linkedin.com/in/raju-ponnamanda-7395a624b/',
      url: 'https://medium.com/@rajuponnamanda3239/unleashing-the-power-of-pinia-effortless-state-management-for-vue-js-3-8892772058db'
    },
    {
      id: 7,
      title: 'Pinia: The Enjoyable Vue Store',
      Author: 'Vue School',
      linkedIn: 'https://www.linkedin.com/in/revanth-kumar-9246841a0/',
      url: 'https://vueschool.io/courses/pinia-the-enjoyable-vue-store'
    },
    {
      id: 8,
      title: 'Auth0 authentication in Vue 3',
      Author: 'Raju Ponnamanda',
      linkedIn: 'https://www.linkedin.com/in/raju-ponnamanda-7395a624b/',
      url: 'https://medium.com/@rajuponnamanda3239/in-the-rapidly-evolving-landscape-of-web-development-securing-user-data-is-paramount-c7ea8c2a98c6'
    },
    {
      id: 9,
      title: 'How a Vue App Works Behind The Scenes',
      Author: 'Kondi Venkatesh',
      linkedIn: 'https://www.linkedin.com/in/venkatesh-kondi-50890322b/',
      url: 'https://medium.com/@venkateshkondi1533/unveiling-the-essence-of-vue-3-project-structure-9c83e049487a'
    },
    {
      id: 10,
      title: 'Vue 3 Composables for Reusable Logic',
      Author: 'Kondi Venkatesh',
      linkedIn: 'https://www.linkedin.com/in/venkatesh-kondi-50890322b/',
      url: 'https://medium.com/@venkateshkondi1533/vue-3-composables-for-reusable-logic-916b861b7532'
    }
  ])

  return { articles }
})