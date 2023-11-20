<template>
  <div v-for="(item, idx) in items" :key="idx" style="margin-bottom: 10px">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="item.image" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <a @click="onClickReadBtn(item.id)">{{ item.title }}</a>
        </div>
        <p class="text-gray-700 text-base">
          {{ item.content }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
  </div>
  <div
    v-if="!isLoadingPostItems && donePostItems"
    :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
  >
    <a-button @click="onClickMoreBtn">loading more</a-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  isLoadingPostItems: {
    type: Boolean,
    required: true
  },
  donePostItems: {
    type: Boolean,
    required: true
  },
  onClickMoreBtn_: {
    type: Function,
    required: true
  },
  onClickEditBtn_: {
    type: Function,
    required: true
  },
  onClickReadBtn_: {
    type: Function,
    required: true
  }
})

function onClickMoreBtn(): void {
  props.onClickMoreBtn_()
}
function onClickReadBtn(id: string): void {
  props.onClickReadBtn_(id)
}

onMounted(() => {
  logger.debug('mounted viewList')
})
onUnmounted(() => {
  logger.debug('unmounted viewList')
})
</script>

<script lang="ts">
export default {
  name: 'viewList',
  inheritAttrs: false,
  customOptions: {}
}
</script>
