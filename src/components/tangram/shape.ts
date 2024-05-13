// decimal value (can be scaled according to canvas size)
type Point = {
  x: number;
  y: number;
};

type Phase = {
  anchorPos: Point;
  rotation: number;
};

class Shape {
  private phases: Phase[];
  private originalPos: Point[];
  private currentPos: Point[];
  private currentPhase: number;
  private color: string;
  private transition_counter: number;
  private TRANSITION_RATE = 120;

  constructor(phases: Phase[], originalPos: Point[], color: string) {
    this.phases = phases;
    this.originalPos = originalPos;
    this.currentPos = originalPos;
    this.currentPhase = -1;
    this.color = color;
    this.transition_counter = 0;
  }

  draw(ctx: CanvasRenderingContext2D, phase: number) {
    const points = this.getPoints(phase);
    ctx.beginPath();
    let origin = this.normalisePoint(points[0], ctx);
    ctx.moveTo(origin.x, origin.y);

    for (let i = 1; i < points.length; i++) {
      const normalisedPoint = this.normalisePoint(points[i], ctx);
      ctx.lineTo(normalisedPoint.x, normalisedPoint.y);
    }
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // two types of draws -> phases and transitions
  private getPoints(phase: number): Point[] {
    if (phase == this.currentPhase) {
      return this.currentPos;
    } else {
      // transition draw
      this.transition_counter++;
      const destPoint = this.place(phase);
      const fraction = this.transition_counter / this.TRANSITION_RATE;
      let points = [];
      for (let i = 0; i < this.originalPos.length; i++) {
        // get x and y delta based on fraction, return modified point
        let dx = (destPoint[i].x - this.currentPos[i].x) * fraction;
        let dy = (destPoint[i].y - this.currentPos[i].y) * fraction;
        let newX = this.currentPos[i].x + dx;
        let newY = this.currentPos[i].y + dy;
        points.push({ x: newX, y: newY });
      }
      // update phase, transition, pos if transition complete
      if (this.transition_counter == this.TRANSITION_RATE) {
        this.currentPhase = phase;
        this.transition_counter = 0;
        this.currentPos = points;
      }
      return points;
    }
  }

  // return coordinates for a shape at a given phase
  private place(phase: number) {
    let points = [];

    // define constants for rotation
    var radians = (Math.PI / 180) * this.phases[phase].rotation,
      cos = Math.cos(radians),
      sin = Math.sin(radians);

    for (let i = 0; i < this.originalPos.length; i++) {
      let point = this.originalPos[i];
      // apply the scalar transform
      let x = point.x + this.phases[phase].anchorPos.x;
      let y = point.y + this.phases[phase].anchorPos.y;

      // skip rotation if point is the anchor point
      if (i == 0) {
        points.push({ x, y });
        continue;
      }
      // apply the rotational transform
      let anchorX: number = points[0].x,
        anchorY: number = points[0].y;
      let rotatedX = cos * (x - anchorX) + sin * (y - anchorY) + anchorX;
      let rotatedY = cos * (y - anchorY) - sin * (x - anchorX) + anchorY;
      points.push({ x: rotatedX, y: rotatedY });
    }
    return points;
  }

  // normalise point (decimal values) based on canvas dims
  private normalisePoint(point: Point, ctx: CanvasRenderingContext2D) {
    return {
      x: point.x * ctx.canvas.width,
      y: point.y * ctx.canvas.height,
    };
  }
}

export default Shape;
