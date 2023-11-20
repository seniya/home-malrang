<template>
  <div id="app_container">
    <mainMenu />
    <div style="margin-top: 30px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'
import mainMenu from '@/components/mainMenu.vue'

onMounted(() => {
  logger.debug('onMounted MainContainer')
})

onUnmounted(() => {
  logger.debug('onMounted onUnmounted')
})
</script>

<script lang="ts">
export default {
  name: 'mainContainer',
  inheritAttrs: false,
  customOptions: {}
}
</script>
