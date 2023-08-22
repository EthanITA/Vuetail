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
  <v-intersect @intersecting="disabled = !$event">
    <v-image
      src="https://picsum.photos/200/300"
      class="w-[500px] h-[500px]"
      width="500"
      height="500"
    />
  </v-intersect>
</template>
<script lang="ts" setup>
import VButton from "./components/atoms/v-button.vue";
import VInput from "./components/atoms/v-input.vue";
import { ref } from "vue";
import { ColorProp, SizeProp } from "./types.ts";
import VCheckbox from "./components/atoms/v-checkbox.vue";
import VIntersect from "./components/atoms/v-intersect.vue";
import VImage from "./components/atoms/v-image.vue";

const a = ref("hello");
const check = ref(false);
const disabled = ref<boolean>(false);
const size = ref<SizeProp>("xl");
const color = ref<ColorProp>("info");
</script>

<style scoped></style>