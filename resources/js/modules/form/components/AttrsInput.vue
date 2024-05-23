<script setup lang="ts">
import { Field } from "../lib/field";
import RadioInput from "./RadioInput.vue";
import StringInput from "./StringInput.vue";
import TextInput from "./TextInput.vue";
import CheckInput from "./checkInput.vue";
import DateInput from "@/modules/calendar/components/DateInput.vue";
import ImageInput from "@/modules/upload/components/form/ImageInput.vue";
import FileInput from "@/modules/upload/components/form/FileInput.vue";
import RangeInput from "@/modules/form/components/RangeInput.vue";
import SelectInput from "@/modules/form/components/SelectInput.vue";
import ToggleInput from "@/modules/form/components/ToggleInput.vue";
import GalleryInput from "@/modules/upload/components/form/GalleryInput.vue";
import TagsInput from "@/modules/form/components/TagsInput.vue";
import EditorInput from "@/modules/editor/components/EditorInput.vue";
import { computed } from "vue";
import Icon from "@/components/Icon.vue";
import * as icons from "@mdi/js";
import { GroupSlots } from "./base/FieldWrapper.vue";
import RepeaterInput from "./RepeaterInput.vue";

type Props = {
  type: string;
  field: Field;
  attributes?: any;
  props?: any;
  icon?: false | string;
};

const {
  type,
  field,
  attributes = {},
  props = {},
  icon = false,
} = defineProps<Props>();

type GroupAttrsSlots = Omit<GroupSlots, "before">;

defineSlots<GroupAttrsSlots>();

const types = {
  string: StringInput,
  text: TextInput,
  radio: RadioInput,
  checkbox: CheckInput,
  date: DateInput,
  image: ImageInput,
  file: FileInput,
  range: RangeInput,
  select: SelectInput,
  toggle: ToggleInput,
  gallery: GalleryInput,
  tags: TagsInput,
  editor: EditorInput,
  repeater: RepeaterInput,
};

const data = computed(() => ({ ...(attributes ?? {}), ...(props ?? {}) }));
</script>
<template>
  <component v-if="types[type]" :is="types[type]" :field="field" v-bind="data">
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="{ ...scope }" />
    </template>
    <template v-if="icon && Object.hasOwn(icons, icon)" #before>
      <Icon :path="icons[icon]" />
    </template>
  </component>
</template>
