<template>
  <div
    ref="div"
    v-intersection-observer="
      ([{ isIntersecting }]: IntersectionObserverEntry[]) =>
        $emit('intersecting', isIntersecting)
    "
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const div = ref<HTMLElement>();

defineEmits<{
  (event: "intersecting", value: boolean): void;
}>();

defineExpose({
  scrollIntoView: () => div.value?.scrollIntoView({ behavior: "smooth" }),
});
</script>
<style scoped></style>