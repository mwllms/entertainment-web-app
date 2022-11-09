<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  placeholder: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex items-center space-x-4 px-4 py-2 md:px-6 md:py-6">
    <IconSearch class="h-6 w-6 flex-shrink-0 md:h-8 md:w-8" />
    <input
      class="h-12 flex-auto bg-blue-dark text-white caret-red placeholder:text-white/50 focus:border-0 focus:outline-0 focus:ring-0 focus-visible:outline-none md:text-2xl"
      type="search"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
