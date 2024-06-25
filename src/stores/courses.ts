import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
  const count = ref(0)
  const courses = ref([
    {
      id: 1,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 2,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 3,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 4,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 5,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 6,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 7,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    },
    {
      id: 8,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      isFav: false,
      inCart: false
    }
  ])

  const articles = ref([
    {
      id: 1,
      picture:
        'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      title: 'Vue Ecosystem',
      desc: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications (SPAs)',
      link: 'https://vueschool.io/storage/media/6ad52b8a067c9066d746f6809845353d/vuejs-master-class-2024-edition-transparent.png',
      website: 'LinkedIn'
    },
  ])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, courses, articles }
})
