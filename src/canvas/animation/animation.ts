export type AnimationType = {
    initTimer: number,
    startFn: () => void,
    animateFn: (timer: number) => void,
    resetFn: () => void
}