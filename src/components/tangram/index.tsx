import { useEffect, useRef } from "react";
import shapes from "./shapes";

type Props = {
  size: number;
};

function Tangram({ size }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  var frameCount = 0;
  var currentPhase = 0;
  var maxPhase = 4;

  function updateCanvas(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frameCount++;

    // change phase if displayed for enough frames
    if (frameCount % 150 == 0) {
      if (currentPhase == maxPhase) {
        currentPhase = 0;
      } else {
        currentPhase++;
      }
      frameCount = 0;
    }

    // handle drawing each shape
    shapes.forEach((shape) => {
      shape.draw(ctx, currentPhase);
    });

    requestAnimationFrame(() => updateCanvas(ctx, canvas));
  }

  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    updateCanvas(context, canvas);
  }, []);

  return <canvas height={size} width={size} ref={canvasRef} />;
}

export default Tangram;
