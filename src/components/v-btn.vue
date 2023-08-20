<template>
  <button
    :class="[color, size]"
    class="rounded-md px-2 py-1 font-semibold text-white shadow-md"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { colors } from "../../tailwind.config.ts";

const props = defineProps<{
  disabled?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
  color?: keyof typeof colors;
}>();

const color = computed(() => {
  const c = props.color || "default";
  return `bg-${c} hover:bg-${c}-hover`;
});

const size = computed(() => {
  const s = props.size;
  if (!s) return "";
  const padding = {
    xs: "px-1 py-0.5",
    sm: "px-2 py-1",
    lg: "px-4 py-2",
    xl: "px-5 py-2.5",
  };
  return `text-${s} ${padding[s]}`;
});
</script>

<style scoped></style>