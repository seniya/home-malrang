<template>
  <div>
    <div>
      <h4>
        POSTS 상세 페이지
        <button @click="onClickRefresh">새로고침</button>
      </h4>
    </div>

    <viewRead
      :item="state.postDetail"
      :isLoadingPostRead="postStore.isLodingPostInfo"
      :donePostRead="postStore.isDonePostInfo"
      :onClickBackBtn_="actionGoList"
      :onClickEditBtn_="actionEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash-es'

import viewRead from '@/views/posts/components/viewRead.vue'
import { postInfoInit, usePostStore } from '@/service/posts/posts.module'
import { type PostInterface } from '@/service/posts/model/post.interface'
import { logger } from '@/utils/instance.logger'

interface stateType {
  postDetail: PostInterface
}

/* request, prepare, on, cb, action */
const router = useRouter()
const route = useRoute()
const postStore = usePostStore()
const state: stateType = reactive({
  postDetail: postInfoInit
})

async function requestApiHttpPostInfo(): Promise<void> {
  const resResult = await postStore.actionHttpPostInfo()
  prepareData()
}

function prepareData(): void {
  const item = postStore.getPostInfo

  const postDetail = cloneDeep(item)
  /*
          데이터 가공 영역
        */
  state.postDetail = postDetail
}

function actionEdit(): void {
  logger.debug('postsRead actionEdit')
}
function actionGoList(): void {
  logger.debug('postsRead actionRead')
  void router.push({
    path: '/posts-list',
    query: { ...route.query }
  })
}

function onClickRefresh(): void {
  requestApiHttpPostInfo()
    .then(() => {
      console.log('ok')
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  logger.debug('mounted postsRead')
  initailize()
})
onUnmounted(() => {
  logger.debug('unmounted postsRead')
})

function initailize(): void {
  logger.debug('initailize postsRead')
  requestApiHttpPostInfo()
    .then(() => {
      console.log('ok')
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
<script lang="ts">
export default {
  name: 'postsRead',
  inheritAttrs: false,
  customOptions: {}
}
</script>
