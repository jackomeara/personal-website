import { useEffect, useRef } from "react";
import Shape from "./shape";
const shapes = [
  new Shape(
    [
      { anchorPos: { x: 0.4025, y: 0.52 }, rotation: 45 }, // box
      { anchorPos: { x: 0.65, y: 0.4 }, rotation: 45 }, // swan
      { anchorPos: { x: 0.2, y: 0.2 }, rotation: 0 }, // rabbit
      { anchorPos: { x: 0.35, y: 0.11 }, rotation: 45 }, // dance 1
      { anchorPos: { x: 0.34, y: 0.25 }, rotation: 45 }, // fox
    ],
    [
      { x: 0, y: 0 },
      { x: 0.15, y: 0 },
      { x: 0.15, y: 0.15 },
      { x: 0, y: 0.15 },
    ],
    "green"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.3, y: 0.2 }, rotation: 45 }, // box
      { anchorPos: { x: 0.28, y: 0.47 }, rotation: 45 }, // swan
      { anchorPos: { x: 0.355, y: 0.27 }, rotation: 0 }, // rabbit
      { anchorPos: { x: 0.229, y: 0.75 }, rotation: 90 }, // dance 2
      { anchorPos: { x: 0.49, y: 0.75 }, rotation: 135 }, // fox
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.3 },
      { x: 0.3, y: 0.3 },
    ],
    "blue"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.3, y: 0.624 }, rotation: 135 }, // box
      { anchorPos: { x: 0.41, y: 0.77 }, rotation: 90 }, // swan
      { anchorPos: { x: 0.652, y: 0.874 }, rotation: 180 }, // rabbit
      { anchorPos: { x: 0.755, y: 0.22 }, rotation: 270 }, // dance 1
      { anchorPos: { x: 0.403, y: 0.843 }, rotation: 90 }, // fox
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.3 },
      { x: 0.3, y: 0.3 },
    ],
    "black"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.51, y: 0.626 }, rotation: 225 }, // box
      { anchorPos: { x: 0.865, y: 0.405 }, rotation: 315 }, // swan
      { anchorPos: { x: 0.35, y: 0.465 }, rotation: 315 }, // rabbit
      { anchorPos: { x: 0.3, y: 0.76 }, rotation: 270 }, // dance 2
      { anchorPos: { x: 0.336, y: 0.245 }, rotation: 135 }, // fox
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.15 },
      { x: 0.15, y: 0.15 },
    ],
    "yellow"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.615, y: 0.3085 }, rotation: 315 }, //box
      { anchorPos: { x: 0.759, y: 0.07 }, rotation: 0 }, // swan
      { anchorPos: { x: 0.277, y: 0.872 }, rotation: 90 }, // rabbit
      { anchorPos: { x: 0.617, y: 0.78 }, rotation: 315 }, // dance 1
      { anchorPos: { x: 0.557, y: 0.036 }, rotation: 315 }, // fox
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.15 },
      { x: 0.15, y: 0.15 },
    ],
    "red"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.508, y: 0.625 }, rotation: 90 }, // box
      { anchorPos: { x: 0.713, y: 0.77 }, rotation: 135 }, // swan
      { anchorPos: { x: 0.431, y: 0.66 }, rotation: 0 }, // rabbit
      { anchorPos: { x: 0.53, y: 0.86 }, rotation: 135 }, // dance 1
      { anchorPos: { x: 0.485, y: 0.325 }, rotation: 315 },
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.212 },
      { x: 0.212, y: 0.212 },
    ],
    "brown"
  ),
  new Shape(
    [
      { anchorPos: { x: 0.615, y: 0.307 }, rotation: 0 }, // box
      { anchorPos: { x: 0.65, y: 0.18 }, rotation: 0 }, // swan
      { anchorPos: { x: 0.44, y: 0.044 }, rotation: 315 }, // rabbit
      { anchorPos: { x: 0.68, y: 0.45 }, rotation: 135 }, // dance 1
      { anchorPos: { x: 0.85, y: 0.84 }, rotation: 135 },
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0.212 },
      { x: 0.1052, y: 0.109 },
      { x: 0.1052, y: -0.109 },
    ],
    "purple"
  ),
];

function Tangram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    let phaseTimer = 0;
    let phase = 0;
    setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      phaseTimer++;
      console.log(phaseTimer);
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (phaseTimer > 160) {
          phase++;
          if (phase >= 5) {
            phase = 0;
          }
          phaseTimer = 0;
        }
        shape.draw(context, phase);
      }
    }, 10);
  }, []);

  return (
    <canvas
      style={{ border: "solid 1px orange" }}
      height="400"
      width="400"
      ref={canvasRef}
    />
  );
}

export default Tangram;
