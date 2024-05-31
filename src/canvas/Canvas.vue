<template>
    <canvas :id="props.id" ref="el"></canvas>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref } from 'vue';
import { RenderCanvasFn, keepAnimating, renderCanvas } from './canvas';
import { isLoaded, waitTillImagesLoaded } from '../images';

const el = ref<HTMLCanvasElement | null>(null);

const props = defineProps<{
    id: string,
    render: RenderCanvasFn,
    refresh: boolean
}>();

let width = 0;
let height = 0;

const doRender = computed(() => {
    return isLoaded.value && (props.refresh || keepAnimating.value);
});

setInterval(
    () => {
        if (doRender.value) {
            renderCanvas(props.id, props.render, width, height);
        }
    },
    50
);

onMounted(async () => {
    const canvasElement = el.value;

    if (canvasElement) {
        canvasElement.style.width ='100%';
        canvasElement.style.height='100%';
        canvasElement.width  = canvasElement.offsetWidth;
        canvasElement.height = canvasElement.offsetHeight;
    }
    
    width = canvasElement?.width ?? 0;
    height = canvasElement?.height ?? 0;

    waitTillImagesLoaded();
});

</script>