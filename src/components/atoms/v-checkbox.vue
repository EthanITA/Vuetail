<template>
  <div
    :class="[
      mapper.getSize(Checkbox.Size, size),
      {
        [mapper.getColor(Checkbox.ActiveColor, color)]: modelValue,
        [mapper.getColor(Checkbox.NotActiveColor, color)]: !modelValue,
      },
    ]"
    class="relative select-none"
    @click="$emit('update:modelValue', !modelValue)"
    tabindex="-1"
  >
    <CheckIcon
      :class="[mapper.getSize(Checkbox.CheckSize, size)]"
      class="absolute stroke-current right-[50%] top-[50%] transform translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      v-show="modelValue"
    />
  </div>
</template>
<script setup lang="ts">
import { ColorProp, SizeProp } from "../../types.ts";
import { CheckIcon } from "@heroicons/vue/24/solid";
import mapper, { Checkbox } from "../../themes/mapper.ts";

withDefaults(
  defineProps<{
    modelValue: boolean;
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

defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>