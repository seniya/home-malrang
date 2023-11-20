<template>
  <ul class="flex">
    <li class="mr-6">
      <router-link to="/pages/1">
        <a class="text-blue-500 hover:text-blue-800" href="#">페이지1 - 권한없이 접근</a>
      </router-link>
    </li>
    <li class="mr-6">
      <router-link to="/pages/2">
        <a class="text-blue-500 hover:text-blue-800" href="#">페이지2 - 권한확인 with page</a>
      </router-link>
    </li>
    <li class="mr-6">
      <router-link to="/pages/3">
        <a class="text-blue-500 hover:text-blue-800" href="#">페이지3 - 권한확인 with router</a>
      </router-link>
    </li>
    <li class="mr-6">
      <router-link to="/pages/4">
        <a class="text-blue-500 hover:text-blue-800" href="#">페이지4 - AG GRID</a>
      </router-link>
    </li>
    <li class="mr-6">
      <router-link to="/pages/5">
        <a class="text-blue-500 hover:text-blue-800" href="#">페이지5 - AG GRID2</a>
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: 'pageContainer',
  inheritAttrs: false,
  customOptions: {}
}
</script>
