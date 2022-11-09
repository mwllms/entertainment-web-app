<script setup lang="ts">
const props = defineProps<{
  recommended: any
}>()
const isBookmarked = ref<boolean>(props.recommended.isBookmarked)
</script>

<template>
  <div>
    <div class="relative h-[110px] w-full overflow-hidden rounded-lg">
      <div class="absolute top-0 right-0 z-20 p-2">
        <button
          class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-dark/50 focus:outline-none"
          @click="isBookmarked = !isBookmarked"
        >
          <img
            v-if="!isBookmarked"
            src="~/assets/icons/icon-bookmark-empty.svg"
            :alt="`Bookmark ${recommended.title}`"
          />
          <img v-else src="~/assets/icons/icon-bookmark-full.svg" :alt="`Remove bookmark for ${recommended.title}`" />
        </button>
      </div>
      <picture class="absolute inset-0">
        <source :srcset="`${recommended.thumbnail.regular.medium} 1x`" media="(min-width: 768px)" />
        <source :srcset="`${recommended.thumbnail.regular.large} 1x`" media="(min-width: 1440px)" />
        <img class="h-full w-full object-cover" :src="recommended.thumbnail.regular.small" :alt="recommended.tilte" />
      </picture>
    </div>
    <div class="mt-2">
      <div class="flex items-center space-x-1.5 text-[11px] text-white/75">
        <span>{{ recommended.year }}</span>
        <div class="h-[3px] w-[3px] rounded-full bg-white/50"></div>
        <div class="flex items-center space-x-1">
          <img
            class="h-2.5 w-2.5"
            :src="`./icons/icon-category-${recommended.category.toLowerCase()}.svg`"
            :alt="`${recommended.category} Category`"
          />
          <span>{{ recommended.category }}</span>
        </div>
        <div class="h-[3px] w-[3px] rounded-full bg-white/50"></div>
        <span>{{ recommended.rating }}</span>
      </div>
      <h3 class="mt-1 text-[14px] font-medium">{{ recommended.title }}</h3>
    </div>
  </div>
</template>
