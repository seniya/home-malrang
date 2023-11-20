<template>
  <ul class="flex">
    <li class="mr-3">
      <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">home</button>
      </router-link>
    </li>
    <li class="mr-3">
      <router-link to="/members/main">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          로그인
          <span v-if="authStore.getIsLogin" style="color: blue">(로그인됨)</span>
          <span v-else style="color: red">(로그인안됨)</span>
        </button>
      </router-link>
    </li>
    <li class="mr-3">
      <router-link to="/posts">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">게시판</button>
      </router-link>
    </li>
    <li class="mr-3">
      <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">페이지 모음</button>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/service/auth/auth.module'
const authStore = useAuthStore()
</script>

<script lang="ts">
export default {
  name: 'mainMenu',
  inheritAttrs: false,
  customOptions: {}
}
</script>
