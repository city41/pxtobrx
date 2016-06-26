interface ColorDifference {
    compare(colorA: string, colorB: string): number
}

declare var colorDifference: ColorDifference;

declare module "color-difference" {
    export = colorDifference;
}
