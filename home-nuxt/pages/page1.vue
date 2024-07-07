<script setup>
const supabase = useSupabaseClient()

const todos = ref([])

async function getTodos() {
  const { data } = await supabase.from('todos').select()
  todos.value = data
}

onMounted(() => {
  getTodos()
})
</script>

<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      {{ todo.name }}
    </li>
  </ul>
</template>
