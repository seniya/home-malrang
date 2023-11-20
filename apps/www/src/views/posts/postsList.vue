<template>
  <div>
    <div>
      <h4>
        POSTS 목록 페이지
        <button @click="onClcikRefresh">새로고침</button>
        &nbsp;&nbsp;
        <button @click="onClickCreate">새글작성</button>
      </h4>
    </div>

    <!-- -->
    <viewList
      :items="state.posts"
      :isLoadingPostItems="postStore.isLodingPosts"
      :donePostItems="postStore.isDonePosts"
      :onClickMoreBtn_="actionMore"
      :onClickEditBtn_="actionEdit"
      :onClickReadBtn_="actionRead"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash-es'

import viewList from '@/views/posts/components/viewList.vue'
import { usePostStore } from '@/service/posts/posts.module'
import { type PostInterface } from '@/service/posts/model/post.interface'
import { logger } from '@/utils/instance.logger'

interface stateType {
  posts: PostInterface[]
}

/* request, prepare, on, cb, action */
const router = useRouter()
const route = useRoute()
const postStore = usePostStore()
const state: stateType = reactive({ posts: [] })

async function requestApiHttpPosts(): Promise<void> {
  const resResult = await postStore.actionHttpPosts()
  prepareData()
}

function prepareData(): void {
  const items = postStore.getPosts
  const posts_ = cloneDeep(items)
  /*
          데이터 가공 영역
        */
  state.posts = posts_
}

function actionMore(): void {
  logger.debug('postsList actionMore')
}
function actionEdit(): void {
  logger.debug('postsList actionEdit')
}
function actionRead(id: string): void {
  void router.push({
    path: `/posts-read/${id}`,
    query: { ...route.query }
  })
}

function onClcikRefresh(): void {
  requestApiHttpPosts()
    .then(() => {
      console.log('ok')
    })
    .catch((err) => {
      console.log(err)
    })
}
function onClickCreate(): void {
  void router.push({
    path: '/posts-create',
    query: { ...route.query }
  })
}

onMounted(() => {
  logger.debug('mounted postsList')
  initailize()
})
onUnmounted(() => {
  logger.debug('unmounted postsList')
})
function initailize(): void {
  logger.debug('initailize postsList')
  requestApiHttpPosts()
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
  name: 'postsList',
  inheritAttrs: false,
  customOptions: {}
}
</script>
