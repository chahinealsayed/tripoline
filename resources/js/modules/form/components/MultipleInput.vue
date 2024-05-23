<script lang="ts" setup>
import { confirm } from "@/modules/bootstrap/lib/confirm";
import { ref, computed } from "vue";
import Icon from '@/components/Icon.vue';
import { mdiChevronDown, mdiChevronUp, mdiMinusBox, mdiPlus, mdiPlusBox } from "@mdi/js";

defineOptions({
  inheritAttrs: false,
});

type Props = {
  field: any[];
};
const props = defineProps<Props>();

const { field } = props;

const emit = defineEmits(["add"]);

const v = ref(0);
const expand = ref<boolean[]>([]);

const add = (...args) => {
  emit(
    "add",
    (model: any) => {
      field.push(model);
      v.value++;
    },
    ...args
  );
};

const remove = (index: number) => {
  confirm("Remove Item").then((confirmed: boolean) => {
    if (confirmed) {
      field.splice(index, 1);
      expand.value.splice(index, 1);
      v.value++;
    }
  });
};

const expandSwitch = (index: number) => {
  expand.value[index] = !expand.value[index];
};

const move = (from: number, to: number) => {
  const tmp = field[to];
  field[to] = field[from];
  field[from] = tmp;
  field[from].position.update(from);
  field[to].position.update(to);
  v.value++;
};

const length = computed(() => {
  return field.length;
});

defineExpose({ add, length });
</script>
<template>
  <div class="multiple-input-component" :key="v">
    <template v-for="(model, i) in field" :key="i">
      <div class="item-header" :class="{ toggle: !expand[i] }">
        <div @click="expandSwitch(i)" class="expandable-icon">
          <Icon :path="expand[i]?mdiMinusBox:mdiPlusBox" />
        </div>
        <div class="title">
          <slot
            name="header"
            :model="model"
            :index="i"
            :expand="expand[i] ?? false"
          >
            <div>Item #{{ i + 1 }}</div>
          </slot>
        </div>
        <div class="order">
          <div
            v-if="i > 0"
            class="up"
            @click="move(i, i - 1)"
            v-tooltip="'Move Up'"
          >
            <Icon :path="mdiChevronUp" />
          </div>
          <div v-else class="up disabled"></div>
          <div
            v-if="field.length > i + 1"
            class="down"
            @click="move(i, i + 1)"
            v-tooltip="'Move Down'"
          >
            <Icon :path="mdiChevronDown" />
          </div>
          <div v-else class="down disabled"></div>
        </div>
      </div>
      <template v-if="expand[i]">
        <div class="item-content">
          <slot :model="model" :index="i" :remove="() => remove(i)"></slot>
        </div>
      </template>
    </template>
    <slot name="add">
      <div>
        <button type="button" class="btn btn-primary btn-sm" @click="add">
          <Icon :path="mdiPlus" />&nbsp;Add New
        </button>
      </div>
    </slot>
  </div>
</template>
<style scoped lang="scss">
@import "@scss/mixins/font-size";

.item-header {
  position: relative;
  padding: 10px;
  background: #e0e0e0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  user-select: none;
  display: flex;
  flex-direction: row;

  &.toggle {
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .expandable-icon {
    width: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .title {
    flex: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .order {
    width: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .up,
    .down {
      width: 50%;
      min-width: 50%;
      @include font-size(1.5);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}

.item-content {
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  background: #f0f0f0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
