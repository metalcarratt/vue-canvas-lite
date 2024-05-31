import { ref } from "vue";

const allImages: Record<string, boolean> = {};

export const isLoaded = ref(false);

export const createImage = (imgPath: string): HTMLImageElement => {
    allImages[imgPath] = false;
    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
        allImages[imgPath] = true;
    }

    return img;
}

const imagesLoaded = (): boolean => {
    return Object.values(allImages).every(value => value);
}

export const waitTillImagesLoaded = () => {
    if (imagesLoaded()) {
        isLoaded.value = true;
        return;
    }
  
    setTimeout(waitTillImagesLoaded, 100);    
}