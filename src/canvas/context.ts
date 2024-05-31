export type Context = {
    ctx: CanvasRenderingContext2D
}

export const getContext = (canvas: HTMLCanvasElement): Context => {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    return {
        ctx
    };
}