import { createContext } from "react";

export const drawRect = (detections, ctx)=>{

    detections.forEach(prediction=>{
        //get prediction results
        const[x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // styling
        const color = 'green'
        ctx.strokeStylt = color
        ctx.font = '50px Arial'
        ctx.fillStyle = color

        //Rectangle
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

        })
}