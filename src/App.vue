<template>
  <div class="flex h-[100vh] gap-2 justify-center items-center">
    <v-checkbox
      v-model="check"
      :disabled="disabled"
      :size="size"
      :color="color"
      label="Label"
      label-left
    >
    </v-checkbox>
    <v-input :disabled="disabled" :size="size" :color="color" v-model="a" />
    <v-button :disabled="disabled" :size="size" :color="color">
      Click me!
    </v-button>
  </div>
</template>
<script lang="ts" setup>
import VButton from "./components/atoms/v-button.vue";
import VInput from "./components/atoms/v-input.vue";
import { ref } from "vue";
import { ColorProp, SizeProp } from "./types.ts";
import VCheckbox from "./components/atoms/v-checkbox.vue";

const a = ref("hello");
const check = ref(false);
const disabled = ref<boolean>(false);
const size = ref<SizeProp>("md");
const color = ref<ColorProp>("info");
</script>

<style scoped></style>