// range 0 to 1
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
  private TRANSITION_RATE = 60;

  constructor(phases: Phase[], originalPos: Point[], color: string) {
    this.phases = phases;
    this.originalPos = originalPos;
    this.currentPos = originalPos;
    this.currentPhase = 0;
    this.color = color;
    this.transition_counter = 0;
  }

  // two types of draws -> phases and transitions
  draw(phase: number) {
    if (
      phase == this.currentPhase ||
      this.transition_counter == this.TRANSITION_RATE
    ) {
      // normal phase draw
      this.currentPhase = phase;
      this.transition_counter = 0;
    } else {
      // transition draw
      this.transition_counter++;
      const destPoint = this.phases[phase].anchorPos;
      const fraction = this.transition_counter / this.TRANSITION_RATE;
      if (fraction === 1) {
        this.currentPhase = phase;
      }
      let points = [];
      for (let i = 0; i < this.originalPos.length; i++) {
        // get x and y delta based on fraction, return modified point
        points.push({});
      }
      return points;
    }
  }

  // normalise point (decimal values) based on canvas dims
  normalisePoint(point: Point, ctx: CanvasRenderingContext2D) {
    return {
      x: point.x * ctx.canvas.width,
      y: point.y * ctx.canvas.height,
    };
  }
}
