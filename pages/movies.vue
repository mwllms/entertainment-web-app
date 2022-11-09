<script setup lang="ts">
const content = useState<any>('content')
const movies = content.value.filter((item: any) => item.category === 'Movie')
const searchResult = useState<any[]>('searchResult', () => [])
const searchInput = ref<string>('')
watch(searchInput, () => {
  searchResult.value = movies.filter((item: any) => item.title.toUpperCase().includes(searchInput.value.toUpperCase()))
})
</script>

<template>
  <div>
    <SearchInput placeholder="Search for movies" v-model="searchInput" />
    <section v-if="searchInput && searchResult.length > 0">
      <h2 class="px-4 text-xl">Found {{ searchResult.length }} results for '{{ searchInput }}'</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="item in searchResult" :key="item.title" :recommended="item" />
      </div>
    </section>
    <section v-if="!searchInput">
      <h2 class="px-4 text-xl">Movies</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="movie in movies" :key="movie.title" :recommended="movie" />
      </div>
    </section>
  </div>
</template>
