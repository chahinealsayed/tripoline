<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { defineProps, ref } from 'vue';

type Props = {
    list
};
const { list } = defineProps<Props>();
// export default {
//     name: 'App',
//     components: {
//         Carousel,
//         Slide,
//         Pagination,
//         Navigation,
//     },
// }
</script>
<template>
    <div class="container">
        <carousel :transition="1000" :items-to-show="4" :autoplay="3000" :breakpoints="{
            400: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'start',
            }
        }">

            <slide v-for="(item, i) in list" :key="i">
                <p>{{ item.label }}11</p>
            </slide>
        </carousel>
    </div>
</template>
  
