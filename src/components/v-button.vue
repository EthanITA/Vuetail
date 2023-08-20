<template>
  <button
    :class="[colorMap[color || 'default'], sizeMap[size || 'md']]"
    class="rounded-md font-semibold text-white shadow-md"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { Color, Size } from "../types.ts";

defineProps<{
  disabled?: boolean;
  size?: Size;
  color?: Color;
}>();

const colorMap: Record<Color, string> = {
  default: "bg-default hover:bg-default-hover",
  danger: "bg-danger hover:bg-danger-hover",
  warning: "bg-warning hover:bg-warning-hover",
  success: "bg-success hover:bg-success-hover",
};

const sizeMap: Record<Size, string> = {
  xs: "text-xs px-1 py-0.5",
  sm: "text-sm px-2 py-1",
  md: "px-3 py-1.5",
  lg: "text-lg px-4 py-2",
  xl: "text-xl px-5 py-2.5",
};
</script>

<style scoped></style>