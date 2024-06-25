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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span class="ml-2 self-center text-2xl font-semibold whitespace-nowrap text-black"
              >E-Learning</span
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
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/courses"
                    class="text-base p-2 rounded-md text-gray-900"
                    active-class="text-black"
                    aria-current="page"
                  >
                    Courses
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/articles"
                    class="text-base p-2 rounded-md text-gray-900"
                    active-class="text-black"
                    aria-current="page"
                  >
                    Articles
                  </router-link>
                </li>
              </ul>
            </div>
          </router-link>
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <div v-if="!isAuthenticated">
            <a href="#" class="text-lg font-semibold leading-6 text-black" @click="login"
              >LogIn <span aria-hidden="true"></span
            ></a>
          </div>
          <div v-else>
            <Menu as="div" class="relative ml-3 flex gap-4">
              <div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(255,0,0)"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
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
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                    >
                      {{ user?.given_name }}
                    </div>
                  </MenuItem>
                  <hr class="h-px bg-gray-200 border-0" />
                  <MenuItem v-slot="{ active }">
                    <div
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                    >
                      {{ user?.email }}
                    </div>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                      @click="logoutUser"
                      >Log out</a
                    >
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
import { auth0 } from '../config/authConfig'

const { loginWithRedirect, isAuthenticated, logout, user } = auth0
const router = useRouter()
const login = () => {
  loginWithRedirect()
}
const logoutUser = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
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
