<template>
  <button
    :class="[
      {
        [mapper.getColor(Button.Color, color)]: !disabled,
        'text-gray-500 bg-gray-200 cursor-not-allowed': disabled,
      },
      mapper.getSize(Button.Size, size),
    ]"
    :disabled="disabled"
    class="font-semibold shadow-sm"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ColorProp, SizeProp } from "../../types.ts";
import mapper, { Button } from "../../themes/mapper.ts";

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