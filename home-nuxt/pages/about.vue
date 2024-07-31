<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <div
      class="static"
      :class="{ 'active': isActive, 'text-danger': hasError }"
    />
    <div :class="classObject" />
    <div class="text">
      hello
    </div>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate'
  },
  layout: 'orange'
})
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
  'active': true,
  'text-danger': false
})

const color = ref('red')
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
