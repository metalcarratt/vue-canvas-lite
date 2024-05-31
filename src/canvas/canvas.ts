import { ref } from "vue";
import { getContext } from "./context";
import { DrawImageProps,
     drawImage 
    } from "./draw";
import { animate } from "./animation";

export type RenderCanvasFn = (canvas: CanvasPaper) => void;

type CanvasPaper = {
    drawImage: (props: DrawImageProps) => void,
    width: number,
    height: number
}

export const keepAnimating = ref(false);

export const renderCanvas = (
    id: string, 
    renderFn: RenderCanvasFn, 
    width: number, height: number
) => {
    const htmlCanvas = document.getElementById(id) as HTMLCanvasElement;
    const context = getContext(htmlCanvas);

    const canvas: CanvasPaper = {
        drawImage: (props: DrawImageProps) => drawImage(context, width, height, props),
        width,
        height
    };

    renderFn(canvas);

    keepAnimating.value = animate();
}
