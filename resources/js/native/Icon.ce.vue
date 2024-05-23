<script setup lang="ts">
import type { Props } from "@/components/Icon.vue";
import * as Icons from "@mdi/js";
import Icon from "@/components/Icon.vue";
import { computed } from "vue";

const props = defineProps<Props>();
const path = Icons[props.path] ?? props.path;
const style = computed(() => ({
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))",
  color: "var(--color)",
  width: '100%',
  height: '100%',
}));
</script>
<template>
  <Icon v-bind="{ ...props, ...$attrs, path, style }" />
</template>
