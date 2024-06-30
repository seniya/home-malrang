<template>
  <div>
    hello world
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log('runtimeConfig: ', runtimeConfig)

const appConfig = useAppConfig()
console.log('appConfig: ', appConfig)
</script>
