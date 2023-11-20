<template>
  <a-card :loading="isLoadingPostRead" :title="item.title">
    <div>
      <span>author : {{ item.author }}</span>
    </div>
    <template #cover>
      <img alt="image loding.." style="max-width: 400px" :src="item.image" />
    </template>
    <template #actions>
      <button key="edit" @click="onClickEditBtn(item.id)">edit</button>
      <button key="back" @click="onClickBackBtn">back</button>
    </template>
    <a-card-meta :description="item.content"> </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isLoadingPostRead: {
    type: Boolean,
    required: true
  },
  donePostRead: {
    type: Boolean,
    required: true
  },
  onClickBackBtn_: {
    type: Function,
    required: true
  },
  onClickEditBtn_: {
    type: Function,
    required: true
  }
})

function onClickBackBtn(): void {
  props.onClickBackBtn_()
}
function onClickEditBtn(id: string): void {
  props.onClickEditBtn_(id)
}
onMounted(() => {
  logger.debug('mounted viewRead')
})
onUnmounted(() => {
  logger.debug('unmounted viewRead')
})
</script>

<script lang="ts">
export default {
  name: 'viewRead',
  inheritAttrs: false,
  customOptions: {}
}
</script>
