<script setup lang="ts">
const props = defineProps<{
  trending: any
}>()
const isBookmarked = ref<boolean>(props.trending.isBookmarked)
</script>

<template>
  <div class="relative h-[140px] w-[240px] snap-center overflow-hidden rounded-lg md:h-[230px] md:w-[470px]">
    <div class="absolute top-0 right-0 z-20 p-2">
      <button
        class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-dark/50 focus:outline-none"
        @click="isBookmarked = !isBookmarked"
      >
        <img v-if="!isBookmarked" src="~/assets/icons/icon-bookmark-empty.svg" :alt="`Bookmark ${trending.title}`" />
        <img v-else src="~/assets/icons/icon-bookmark-full.svg" :alt="`Remove bookmark for ${trending.title}`" />
      </button>
    </div>
    <div class="absolute bottom-0 z-20 p-4">
      <div class="flex items-center space-x-2 text-xs text-white/75">
        <span>{{ trending.year }}</span>
        <div class="h-[3px] w-[3px] rounded-full bg-white/50"></div>
        <div class="flex items-center space-x-1">
          <img
            class="h-3 w-3"
            :src="`./icons/icon-category-${trending.category.toLowerCase()}.svg`"
            :alt="`${trending.category} Category`"
          />
          <span>{{ trending.category }}</span>
        </div>
        <div class="h-[3px] w-[3px] rounded-full bg-white/50"></div>
        <span>{{ trending.rating }}</span>
      </div>
      <h3 class="text-[15px] font-medium">
        {{ trending.title }}
      </h3>
    </div>
    <div class="absolute inset-0 z-10 bg-gradient-to-t from-blue-dark/80 to-blue-dark/5"></div>
    <picture class="absolute inset-0">
      <source :srcset="`${trending.thumbnail.trending.large} 1x`" media="(min-width: 768px)" />
      <img class="h-full w-full object-cover" :src="trending.thumbnail.trending.small" :alt="trending.tilte" />
    </picture>
  </div>
</template>
