import { keepAnimating } from "../canvas";
import { AnimationType } from "./animation";

type CurrentAnimation = () => boolean;

const buildAnimation = ({initTimer, startFn, animateFn, resetFn}: AnimationType) => {
    startFn();
    let timer = initTimer;
    return () => {
        if (timer === 0) {
            resetFn();
            return false;
        }

        animateFn(timer);

        timer--;
        return true;
    }
}

const animations: AnimationType[] = [];
let currentAnimation: CurrentAnimation | null = null;

export const addAnimation = (animation: AnimationType) => {
    animations.push(animation);
    keepAnimating.value = true;
}

export const animate = () => {
    if (currentAnimation) {
        const keepAnimating = currentAnimation();

        if (!keepAnimating) {
            currentAnimation = null;
        }
        return true;
    }

    if (animations.length) {
        currentAnimation = buildAnimation(animations[0]);
        animations.splice(0, 1);
        return true;
    }

    return false;
}