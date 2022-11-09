<script setup lang="ts">
const { data } = await useFetch('/api/content')
const content = useState('content', () => data)
</script>

<template>
  <div>
    <Header class="md:mx-6 md:mt-6" />
    <main class="mb-6">
      <slot />
    </main>
  </div>
</template>
