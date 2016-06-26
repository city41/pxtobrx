import Action from "./action";
export const CONVERT_IMAGE_DATA_TO_LEGO_DEF: string = "CONVERT_IMAGE_DATA_TO_LEGO_DEF";
export type CONVERT_IMAGE_DATA_TO_LEGO_DEF = {data: Uint8ClampedArray, width: number, height: number};

type ConvertUrlResult = CONVERT_IMAGE_DATA_TO_LEGO_DEF;

function convertUrlToData(url: string) {
  return new Promise<ConvertUrlResult>((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const context: CanvasRenderingContext2D = canvas.getContext("2d");
      context.drawImage(img, 0, 0);
      const imgData: ImageData = context.getImageData(0, 0, img.width, img.height);

      resolve({
        data: imgData.data,
        width: img.width,
        height: img.height
      });
    };
    img.src = url;
  });
}

export function transformFromUrl(url: string): Function {
  return function(dispatch) {
    return convertUrlToData(url).then((result: ConvertUrlResult) => {
      dispatch({
        type: CONVERT_IMAGE_DATA_TO_LEGO_DEF,
        payload: result
      });
    });
  };
}
