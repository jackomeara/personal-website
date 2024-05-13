import { useEffect, useRef } from "react";
import Shape from "./shape";
const shapes = [
  new Shape(
    [
      { anchorPos: { x: 0.4025, y: 0.52 }, rotation: 45 },
      // { anchorPos: { x: 0.4, y: 0.4 }, rotation: 90 },
      // { anchorPos: { x: 0.4, y: 0.8 }, rotation: 0 },
      // { anchorPos: { x: 0.1, y: 0.4 }, rotation: 45 },
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
      { anchorPos: { x: 0.3, y: 0.2 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
      { anchorPos: { x: 0.3, y: 0.624 }, rotation: 135 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
      { anchorPos: { x: 0.51, y: 0.626 }, rotation: 225 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
      { anchorPos: { x: 0.615, y: 0.3085 }, rotation: 315 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
      { anchorPos: { x: 0.508, y: 0.625 }, rotation: 90 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
      { anchorPos: { x: 0.615, y: 0.307 }, rotation: 0 },
      // { anchorPos: { x: 0.2, y: 0.7 }, rotation: 45 },
      // { anchorPos: { x: 0.2, y: 0.9 }, rotation: 0 },
      // { anchorPos: { x: 0.6, y: 0.6 }, rotation: 135 },
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
        if (phaseTimer > 150) {
          phase++;
          if (phase >= 1) {
            phase = 0;
          }
          phaseTimer = 0;
          console.log(phase);
        }
        shape.draw(context, phase);
      }
    }, 30);
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
