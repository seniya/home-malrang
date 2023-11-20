<template>
  <div>
    <div>
      <h4>Posts 컨테이너</h4>
    </div>
    <div style="padding: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'postsContainer',
  inheritAttrs: false,
  customOptions: {}
}
</script>

<style></style>
