<script setup lang="ts">
import { Field } from "../lib/field";
import { GroupSlots } from "./base/FieldWrapper.vue";
import FieldWrapper from "@/modules/form/components/base/FieldWrapper.vue";
import { ref, onMounted } from "vue";
import Button from "@/modules/bootstrap/components/Button.vue";
import Icon from "@/components/Icon.vue";
import { mdiClose, mdiPlusThick } from "@mdi/js";

defineOptions({
    inheritAttrs: false,
});

defineSlots<GroupSlots>();

type Props = {
    field: Field;
    noLabel?: boolean;
    base?: 10 | 12;
    layout?: any[][];
};
const props = defineProps<Props>();

const { field, noLabel = false, base = 12, layout } = props;

const list = ref<any[]>(field.value ?? []);

const add = () => {
    const item: any = {};
    layout?.forEach((row) => {
        row.forEach((col) => {
            item[col] = "";
        });
    });
    list.value.push(item);
    update();
};

const remove = (i: number) => {
    list.value.splice(i, 1);
    list.value = list.value.filter((item) => item);
    update();
};

const update = () => {
    field.update(list.value);
};

const touch = (e) => {
    field.touch(e);
};

const blur = (e) => {
    field.blur(e);
};

onMounted(() => {
    if (!list.value.length) {
        add();
    }
});
</script>
<template>
    <FieldWrapper :field="field" :no-label="noLabel">
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="{ ...scope }" />
        </template>
        <template #="{ id }">
            <div class="repeater-layout d-flex flex-column gap-3">
                <template v-for="(value, v) in list" :key="v">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="repeater-item d-flex flex-column gap-3">
                                <template v-for="(row, i) in layout" :key="i">
                                    <div class="row">
                                        <template v-for="(col, c) in row" :key="c">
                                            <div :class="{ [`col-md-${base / row.length}`]: true }">
                                                <input :id="id" class="form-control" v-model="value[col]" @input="update"
                                                    @focus="touch" @blur="blur" autocomplete="off" spellcheck="false"
                                                    :placeholder="col" />
                                            </div>
                                        </template>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <template v-if="v > 0">
                                <Button color="danger" @click="remove(v)">
                                    <Icon :path="mdiClose" />
                                </Button>
                            </template>
                            <template v-else>
                                <Button color="success" @click="add">
                                    <Icon :path="mdiPlusThick" />
                                </Button>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </FieldWrapper>
</template>