<template>
  <div>
    <p>페이지 2화면</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'
import { StorageNameCode } from '@/utils/common.constants'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  logger.debug('mounted pageTwo')
  initailize()
})
onUnmounted(() => {
  logger.debug('unmounted pageTwo')
})
function initailize(): void {
  const token = localStorage.getItem(StorageNameCode.TOKEN)
  logger.debug('initailize token: ', token)
  if (token == null) {
    void router.push({
      path: '/members/main',
      query: { ...route.query }
    })
  }
  logger.debug('pageTwo init')
}
</script>

<script lang="ts">
export default {
  name: 'pageTwo',
  inheritAttrs: false,
  customOptions: {}
}
</script>
