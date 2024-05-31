import { RenderCanvasFn, drawImage } from './canvas';
import { createImage } from './images';
import Canvas from './canvas/Canvas.vue';
import { From } from './canvas';
import { AnimationType, animate, addAnimation } from './canvas/animation';

export {
    drawImage, 
    createImage, 
    Canvas,
    type RenderCanvasFn,
    From,
    type AnimationType,
    animate,
    addAnimation
};