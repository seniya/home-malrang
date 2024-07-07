<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const { status, data: posts } = useFetch('/api/posts', {
  lazy: true
})
</script>

<template>
  <div>
    <h1>Welcome to your dashboard</h1>
    <!-- you will need to handle a loading state -->
    <div v-if="status === 'pending'">
      Loading ...
    </div>
    <div v-else>
      <div
        v-for="(post, index) in posts"
        :key="index"
      />
      <!-- do something -->
    </div>
  </div>
  </div>
</template>
