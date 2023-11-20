<template>
  <div>
    <h4>
      POSTS 작성 페이지
      <button @click="onClickBackBtn">목록으로</button>
    </h4>

    <!-- antd 반영-->
    <viewCreate :isLoadingPostAdd="false" :actionSave="actionCreate" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import viewCreate from '@/views/posts/components/viewCreate.vue'
import { logger } from '@/utils/instance.logger'

/* request, prepare, on, cb, action */
const router = useRouter()
const route = useRoute()

function actionCreate(): void {
  logger.debug('postsCreate actionCreate')
  alert('저장!')
}

function onClickBackBtn(): void {
  void router.push({
    path: '/posts-list',
    query: { ...route.query }
  })
}

onMounted(() => {
  logger.debug('mounted postsCreate')
  initailize()
})
onUnmounted(() => {
  logger.debug('unmounted postsCreate')
})
function initailize(): void {
  logger.debug('initailize postsCreate')
}
</script>

<script lang="ts">
export default {
  name: 'postsCreate',
  inheritAttrs: false,
  customOptions: {}
}
</script>
