import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    quote: 'In learning, you will teach, and in teaching, you will learn.',
    home: 'Home',
    courses: 'Courses',
    articles: 'Articles',
    login: 'LogIn',
    logout: 'Log out',
    Vue_js_3_Fundamentals_with_the_Composition_API:
      'Vue.js 3 Fundamentals with the Composition API',
    Common_Vue_js_Mistakes_and_How_to_Avoid_Them: 'Common Vue.js Mistakes and How to Avoid Them',
    Internationalization_with_vue_i18n: 'Internationalization with vue-i18n',
    Vue_js_Components_Fundamentals: 'Vue.js Components Fundamentals',
    Reusable_Vue_js_Components_with_Slots: 'Reusable Vue.js Components with Slots',
    Vue_Router_for_Everyone: 'Vue Router for Everyone',
    Pinia_The_Enjoyable_Vue_Store: 'Pinia: The Enjoyable Vue Store',
    Rapid_Testing_with_Vitest: 'Rapid Testing with Vitest'
  },
  nl: {
    quote: 'Door te leren, zul je lesgeven en door te lesgeven, zul je leren.',
    home: 'Startpagina',
    courses: 'Cursussen',
    articles: 'Artikelen',
    login: 'Inloggen',
    logout: 'Uitloggen',
    Vue_js_3_Fundamentals_with_the_Composition_API: 'Vue.js 3 Basisprincipes met de Compositie API',
    Common_Vue_js_Mistakes_and_How_to_Avoid_Them:
      'Veelvoorkomende Vue.js Fouten en Hoe Ze te Voorkomen',
    Internationalization_with_vue_i18n: 'Internationalisering met vue-i18n',
    Vue_js_Components_Fundamentals: 'Vue.js Componenten Basisprincipes',
    Reusable_Vue_js_Components_with_Slots: 'Herbruikbare Vue.js Componenten met Slots',
    Vue_Router_for_Everyone: 'Vue Router voor Iedereen',
    Pinia_The_Enjoyable_Vue_Store: 'Pinia: De Aangename Vue Store',
    Rapid_Testing_with_Vitest: 'Snelle Tests met Vitest'
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
