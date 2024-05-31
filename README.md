# Vue Canvas Lite

Usage:

```vue
<template>
    <Canvas id="myCanvas" :render="renderFunction" :refresh="refresh"></Canvas>
</template>

<script setup>
import { Canvas, type RenderCanvasFn } from "vue-canvas-lite";

const renderFunction: RenderCanvasFn = (canvas) => {
    // render instructions
}

const refresh = false;
</script>
```

## Drawing images
```ts
import { createImage, RenderCanvasFn } from "vue-canvas-lite";

const myImage = createImage('my_image.png'); // where my_image.png is in the root of the 'public' folder

const renderFunction: RenderCanvasFn = (canvas) => {
    canvas.drawImage({
        img: myImage
    });
}
```

Align image to side or corner:
```ts
canvas.drawImage({
    img: myImage,
    from: From.TOP_RIGHT,
    x: 100
})
```
Draws image 100px right of top right corner

And more...
