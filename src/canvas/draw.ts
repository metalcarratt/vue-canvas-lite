import { Context } from "./context";

export enum From {
    TOP, BOTTOM, LEFT, RIGHT, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT
}

export type DrawImageProps = {
    img: HTMLImageElement,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    from?: From,
    filter?: string
}

const getXY = ({x = 0, y = 0, from, img}: DrawImageProps, width: number, height: number): {x: number, y: number} => {
    if (from) {
        switch (from) {
            case From.BOTTOM:
                return { x, y: height - img.height - y};
            case From.RIGHT:
                return { x: width - img.width - x, y };
            case From.TOP_RIGHT:
                return { x: width - img.width - x, y };
            case From.BOTTOM_LEFT:
                return { x, y: height - img.height - y};
            case From.BOTTOM_RIGHT:
                return { x: width - img.width - x, y: height - img.height - y};
        }
    }
    return {x, y}
}

export const drawImage = ({ctx}: Context, width: number, height: number, props: DrawImageProps) => {

    if (props.filter) {
        ctx.save();
        ctx.filter = props.filter;
    }

    const {x, y} = getXY(props, width, height);

    if (!props.width || !props.height) {
        ctx.drawImage(props.img, x, y);

    } else {
        ctx.drawImage(
            props.img,
            x,
            y,
            props.width,
            props.height
        );
    }

    if (props.filter) {
        ctx.restore();
    }
}