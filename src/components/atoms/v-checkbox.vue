<template>
  <div
    :class="[
      [atom.getSize(Checkbox.LabelSize, size)],
      {
        'text-gray-400 cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      },
    ]"
    class="flex select-none items-center"
    @click="
      () => {
        if (disabled) return;
        const checkbox = $refs.checkbox as HTMLDivElement;
        const focusAction = !modelValue ? checkbox.focus : checkbox.blur;
        focusAction.call(checkbox);
        $emit('update:modelValue', !modelValue);
      }
    "
    @mouseleave="hovered = false"
    @mouseover="hovered = true"
  >
    <template v-if="labelLeft">
      <p v-if="label && !$slots.label">{{ label }}</p>
      <div v-else>
        <slot name="label" />
      </div>
    </template>
    <div
      ref="checkbox"
      :class="[
        atom.getSize(Checkbox.Size, size),
        disabled
          ? 'bg-gray-200 ring-0 text-gray-400 border-gray-400'
          : {
              [atom.getColor(Checkbox.ActiveColor, color)]: modelValue,
              [atom.getColor(Checkbox.NotActiveColor, color)]: !modelValue,
              [atom.getColor(Checkbox.ActiveHoverColor, color)]:
                hovered && modelValue,
              [atom.getColor(Checkbox.NotActiveHoverColor, color)]:
                hovered && !modelValue,
            },
      ]"
      :tabindex="!disabled ? -1 : undefined"
      class="relative"
    >
      <CheckIcon
        v-show="modelValue"
        :class="[atom.getSize(Checkbox.CheckSize, size)]"
        aria-hidden="true"
        class="absolute stroke-current right-[50%] top-[50%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <template v-if="!labelLeft">
      <p v-if="label && !$slots.label">{{ label }}</p>
      <div v-else>
        <slot name="label" />
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ColorProp, SizeProp } from "../../types.ts";
import { CheckIcon } from "@heroicons/vue/24/solid";
import atom, { Checkbox } from "../../themes/atom.ts";
import { ref } from "vue";

withDefaults(
  defineProps<{
    modelValue: boolean;
    disabled?: boolean;
    size?: SizeProp;
    color?: ColorProp;
    label?: string;
    labelLeft?: boolean;
  }>(),
  {
    disabled: false,
    size: "md",
    color: "default",
  },
);

const hovered = ref<boolean>(false);

defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>