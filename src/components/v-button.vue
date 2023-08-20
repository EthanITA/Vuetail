<template>
  <button
    :class="[
      {
        [color]: !disabled,
        'text-gray-500 bg-gray-200 cursor-not-allowed': disabled,
      },
      size,
    ]"
    :disabled="disabled"
    class="rounded-md font-semibold shadow-md"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { Color, Size } from "../types.ts";
import { buttonColor, buttonSize } from "../utils/mapper.ts";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    size?: Size;
    color?: Color;
  }>(),
  {
    disabled: false,
    size: "md",
    color: "default",
  },
);

const color = computed(
  () => buttonColor[props.color] || buttonColor["default"],
);

const size = computed(() => buttonSize[props.size] || buttonSize["md"]);
</script>

<style scoped></style>