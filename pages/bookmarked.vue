<script setup lang="ts">
const content = useState<any>('content')
const bookmarkedMovies = content.value.filter((item: any) => item.category === 'Movie' && item.isBookmarked)
const bookmarkedSeries = content.value.filter((item: any) => item.category === 'TV Series' && item.isBookmarked)
const searchResult = useState<any[]>('searchResult', () => [])
const searchInput = ref<string>('')
watch(searchInput, () => {
  searchResult.value = content.value.filter(
    (item: any) => item.title.toUpperCase().includes(searchInput.value.toUpperCase()) && item.isBookmarked
  )
})
</script>

<template>
  <div>
    <SearchInput placeholder="Search for bookmarked shows" v-model="searchInput" />
    <section v-if="searchInput && searchResult.length > 0">
      <h2 class="px-4 text-xl">Found {{ searchResult.length }} results for '{{ searchInput }}'</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="item in searchResult" :key="item.title" :recommended="item" />
      </div>
    </section>
    <section v-if="!searchInput">
      <h2 class="px-4 text-xl">Bookmarked Movies</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="movie in bookmarkedMovies" :key="movie.title" :recommended="movie" />
      </div>
    </section>
    <section v-if="!searchInput" class="mt-6">
      <h2 class="px-4 text-xl">Bookmarked Series</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="serie in bookmarkedSeries" :key="serie.title" :recommended="serie" />
      </div>
    </section>
  </div>
</template>
