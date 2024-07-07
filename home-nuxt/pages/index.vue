<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <NuxtLink to="/about">
      About page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log('runtimeConfig: ', runtimeConfig)
</script>

<style>
h1 {
  font-family: 'FarAwayGalaxy', sans-serif;
}
</style>
