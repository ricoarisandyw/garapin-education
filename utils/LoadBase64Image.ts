import axios from "axios";

// function LoadBase64Image(url: string) {
//     return axios.get(url, { responseType: 'blob' })
//         .then(response => Buffer.from(response.data, 'binary').toString('base64'))
// }

type Callback = (value: string) => void

function LoadBase64Image(url: string, callback: Callback) {
    let canvas = document.createElement('canvas') as (HTMLCanvasElement | null);
    let img = document.createElement('img');
    //img.setAttribute('crossorigin', 'anonymous');
    img.src = url;
    img.crossOrigin = "anonymous"

    img.onload = () => {
        if (canvas) {
            canvas.height = img.height;
            canvas.width = img.width;
            let context = canvas.getContext('2d') as CanvasRenderingContext2D;
            context.drawImage(img, 0, 0);
            let dataURL = canvas.toDataURL('image/png');
            canvas = null;
            callback(dataURL);
        } else {
            callback("")
        }
    };
}

export default LoadBase64Image