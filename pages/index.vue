<script setup lang="ts">
const content = useState<any>('content')
const trending = content.value.filter((item: any) => item.isTrending)
const recommended = content.value.filter((item: any) => !item.isTrending)
const searchResult = useState<any[]>('searchResult', () => [])
const searchInput = ref<string>('')
watch(searchInput, () => {
  searchResult.value = content.value.filter((item: any) =>
    item.title.toUpperCase().includes(searchInput.value.toUpperCase())
  )
})
</script>

<template>
  <div>
    <SearchInput placeholder="Search for movies or TV series" v-model="searchInput" />
    <section v-if="searchInput && searchResult.length > 0">
      <h2 class="px-4 text-xl">Found {{ searchResult.length }} results for '{{ searchInput }}'</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="item in searchResult" :key="item.title" :recommended="item" />
      </div>
    </section>
    <section v-if="!searchInput">
      <h2 class="px-4 text-xl md:px-6 md:text-[32px]">Trending</h2>
      <div class="mt-4 snap-x snap-mandatory overflow-y-scroll md:mt-6">
        <div
          class="flex gap-x-4 px-4 md:hidden"
          :style="`width: ${trending.length * 240 + (trending.length - 1) * 16}px`"
        >
          <CardTrending v-for="t in trending" :key="trending" :trending="t" />
        </div>
        <div
          class="hidden gap-x-6 px-6 md:flex"
          :style="`width: ${trending.length * 470 + (trending.length - 1) * 24}px`"
        >
          <CardTrending v-for="t in trending" :key="trending" :trending="t" />
        </div>
      </div>
    </section>
    <section v-if="!searchInput" class="mt-6">
      <h2 class="px-4 text-xl">Recommended for you</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 px-4">
        <CardRecommended v-for="r in recommended" :key="r.title" :recommended="r" />
      </div>
    </section>
  </div>
</template>
