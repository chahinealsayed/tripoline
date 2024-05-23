<script setup lang="ts">
import { language, translate } from '@/lib/metadata';
import Offcanvas from '@/modules/bootstrap/components/Offcanvas.vue';
import ToggleButton from '@/modules/bootstrap/components/ToggleButton.vue';
import { defineProps, ref } from 'vue';

interface Item {
    label: string,
    url: string,
}

type Props = {
    list: Item[]
    external: Item[],
    // donationLink: string,
};
const handleLinkClick = () => {
    offcanvasElt.value.close();
}

const { list, external } = defineProps<Props>();
const offcanvasElt = ref<any>(null)
const scrollTo = (id) => {
    const section = document.getElementById(id);
    console.log('id', id);

    console.log('target', section);

    offcanvasElt.value.close()
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
}

// const offcanvas = ref<any>(null)
const canvasEl = (el: any, element: any) => {
    element(el)
    offcanvasElt.value = el;
}

</script>
<template>
    <ToggleButton class="btn-side">
        <web-icon path="mdiMenu" id="menu-icon" class="menu-hamburger"></web-icon>
        <template #content="{ element, closed }">
            <Offcanvas backdrop :ref="(el) => { canvasEl(el, element) }" :placement="language() === 'ar' ? 'start' : 'end'"
                @closed="closed">
                <ul class="nav-menu">
                    <li v-for="(item, i) in list" :key="i">
                        <a :href="item.url" @click="handleLinkClick">{{ item.label }}</a>
                    </li>
                </ul>
            </Offcanvas>
        </template>
    </ToggleButton>
</template>