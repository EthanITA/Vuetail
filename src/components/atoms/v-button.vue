<template>
  <button
    :class="[
      {
        [atom.getColor(Button.Color, color)]: !disabled,
        'text-gray-400 bg-gray-200 cursor-not-allowed': disabled,
      },
      atom.getSize(Button.Size, size),
    ]"
    :disabled="disabled"
    class="font-semibold shadow-sm"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ColorProp, SizeProp } from "../../types.ts";
import atom, { Button } from "../../themes/atom.ts";

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