<template>
  <header class="bg-white shadow-lg">
    <nav class="flex px-2 py-2 items-center justify-between ml-2 top-0" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link class="flex items-center" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>

          <span class="ml-2 self-center text-2xl font-semibold whitespace-nowrap text-black"
            >Ariqt-Learning</span
          >
          <div v-if="isAuthenticated" class="flex items-center pl-6">
            <ul class="flex flex-row font-medium mt-0 space-x-4 text-sm">
              <li>
                <router-link
                  to="/"
                  class="text-base p-2 rounded-md text-gray-900"
                  active-class="text-black"
                  aria-current="page"
                >
                  {{ $t('home') }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/courses"
                  class="text-base p-2 rounded-md text-gray-900"
                  active-class="text-black"
                  aria-current="page"
                >
                  {{ $t('courses') }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/articles"
                  class="text-base p-2 rounded-md text-gray-900"
                  active-class="text-black"
                  aria-current="page"
                >
                  {{ $t('articles') }}
                </router-link>
              </li>
            </ul>
          </div>
        </router-link>
      </div>
      <div class="lg:flex lg:flex-1 lg:justify-end">
        <div v-if="!isAuthenticated">
          <a href="#" class="text-lg font-semibold leading-6 text-black" @click="login">
            {{ $t('login') }}
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div v-else>
          <Menu as="div" class="relative ml-3 flex gap-4">
            <div class="ml-4">
              <select
                v-model="locale"
                @change="changeLocale"
                class="p-2 bg-slate-50 text-black rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="nl">Dutch</option>
              </select>
            </div>
            <router-link class="flex items-center" to="/wishlist">
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span
                  class="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >
                  {{ courseStore.favCount }}
                </span>
              </div>
            </router-link>
            <div v-if="user">
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="user?.picture"
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute w-max top-10 right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }" class="divide-gray-100 divide-y">
                  <div
                    v-if="user"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >
                    {{ user?.given_name }}
                  </div>
                </MenuItem>
                <hr class="h-px bg-gray-200 border-0" />
                <MenuItem v-slot="{ active }">
                  <div
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >
                    {{ user?.email }}
                  </div>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    @click="logoutUser"
                  >
                    {{ $t('logout') }}
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { auth0 } from '../config/authConfig'
import { useCoursesStore } from '../stores/courses'

const { loginWithRedirect, isAuthenticated, logout, user } = auth0
const courseStore = useCoursesStore()
const router = useRouter()
const { locale } = useI18n()
const login = () => {
  loginWithRedirect()
}
const logoutUser = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
const changeLocale = (event: Event) => {
  locale.value = (event.target as HTMLSelectElement).value
}
</script>

<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
