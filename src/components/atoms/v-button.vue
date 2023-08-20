<template>
  <button
    :class="[
      {
        [mapper.getColor(buttonColor, color)]: !disabled,
        'text-gray-500 bg-gray-200 cursor-not-allowed': disabled,
      },
      mapper.getSize(buttonSize, size),
    ]"
    :disabled="disabled"
    class="font-semibold"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ColorProp, SizeProp } from "../../types.ts";
import mapper, { buttonColor, buttonSize } from "../../themes/mapper.ts";

withDefaults(
  defineProps<{
    disabled?: boolean;
    size?: SizeProp;
    color?: ColorProp;
  }>(),
  {
    disabled: false,
    size: "md",
    color: "default",
  },
);
</script>