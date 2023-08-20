<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event as InputEvent).target?.value)"
    :class="[
      {
        [mapper.getColor(inputColor, color)]: !disabled,
        'text-gray-500 bg-gray-200 cursor-not-allowed !select-none': disabled,
      },
      mapper.getSize(inputSize, size),
    ]"
    :disabled="disabled"
    class="focus:outline-none bg-gray-100"
  />
</template>
<script lang="ts" setup>
import { ColorProp, SizeProp } from "../../types.ts";
import mapper, { inputColor, inputSize } from "../../themes/mapper.ts";

defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

withDefaults(
  defineProps<{
    disabled?: boolean;
    size?: SizeProp;
    color?: ColorProp;
    modelValue?: string;
  }>(),
  {
    disabled: false,
    size: "md",
    color: "default",
  },
);
</script>