<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CloseButton from "./CloseButton.vue";
import { OffcanavsPlacement, OffcanavsResponsive } from "../types";
import Offcanvas from "bootstrap/js/src/offcanvas";

type Slots = {
  default: any;
  title: any;
};
const slots = defineSlots<Slots>();

type Props = {
  title?: string;
  placement?: OffcanavsPlacement;
  responsive?: null | OffcanavsResponsive;
  backdrop?: boolean | "static";
  keyboard?: boolean;
  scroll?: boolean;
  noHeader?: boolean;
};
const {
  title = "",
  placement = "start",
  responsive = null,
  backdrop = "static",
  keyboard = false,
  scroll = false,
  noHeader = false,
} = defineProps<Props>();

const offcanvasRef = ref<any>(null);
const offcanvas = ref<any>(null);

type Emits = {
  close: any;
  closed: any;
  prevented: any;
  open: any;
  opened: any;
};
const emit = defineEmits<Emits>();

const onClose = (e) => {
  emit("close", e);
};

const onClosed = (e) => {
  emit("closed", e);
};

const onPrevented = (e) => {
  emit("prevented", e);
};

const onOpen = (e) => {
  emit("open", e);
};

const onOpened = (e) => {
  emit("opened", e);
};

const create = () => {
  offcanvas.value = new Offcanvas(offcanvasRef.value, {
    backdrop,
    keyboard,
    scroll,
  });
  offcanvasRef.value.addEventListener("hide.bs.offcanvas", onClose);
  offcanvasRef.value.addEventListener("hidden.bs.offcanvas", onClosed);
  offcanvasRef.value.addEventListener("hidePrevented.bs.offcanvas", onPrevented);
  offcanvasRef.value.addEventListener("show.bs.offcanvas", onOpen);
  offcanvasRef.value.addEventListener("shown.bs.offcanvas", onOpened);
};

const open = () => {
  offcanvas.value?.show?.();
};

const close = () => {
  offcanvas.value?.hide?.();
};

defineExpose({ open, close });

onMounted(() => {
  create();
});

onUnmounted(() => {
  offcanvasRef.value.removeEventListener("hide.bs.offcanvas", onClose);
  offcanvasRef.value.removeEventListener("hidden.bs.offcanvas", onClosed);
  offcanvasRef.value.removeEventListener(
    "hidePrevented.bs.offcanvas",
    onPrevented
  );
  offcanvasRef.value.removeEventListener("show.bs.offcanvas", onOpen);
  offcanvasRef.value.removeEventListener("shown.bs.offcanvas", onOpened);
});
</script>
<template>
  <Teleport to="body">
    <div
      ref="offcanvasRef"
      :class="{
        [`offcanvas${responsive ? '-${responsive}' : ''}`]: true,
        [`offcanvas-${placement}`]: true,
        show: true,
      }"
      tabindex="-1"
      aria-labelledby="offcanvasLabel"
      v-bind="$attrs"
    >
      <div v-if="!noHeader" class="offcanvas-header">
        <div class="offcanvas-title">
          <slot name="title">
            <h5>{{ title }}</h5>
          </slot>
        </div>
        <CloseButton @click.prevent.stop="close" />
      </div>
      <div class="offcanvas-body">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
