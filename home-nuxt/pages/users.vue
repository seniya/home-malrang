<script setup lang="ts">
const { data, error } = await useAsyncData('users', () => myGetFunction('users'))

// This is also possible:
// const { data, error } = await useAsyncData(() => myGetFunction('users'))
</script>
