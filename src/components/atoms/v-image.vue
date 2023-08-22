<template>
  <img
    v-intersection-observer="loadSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :src="img_src"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const props = defineProps<{
  src: string;
  width?: string;
  height?: string;
  alt?: string;
  eagerLoad?: boolean;
}>();

const img_src = ref<string>("");
const loadSrc = async ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
  if (isIntersecting || props.eagerLoad) {
    img_src.value = props.src;
  }
};
</script>
<style scoped></style>