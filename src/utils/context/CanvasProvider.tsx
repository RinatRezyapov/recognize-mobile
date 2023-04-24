import React, {createContext, FC, ReactNode} from 'react';

import {Dimensions} from 'react-native';

import {rect, SkCanvas, Skia, SkiaView, useDrawCallback} from '@shopify/react-native-skia';
import styled from '@emotion/native';

const {width, height} = Dimensions.get('screen');

interface IProps {
  children: ReactNode;
}

interface ICanvasContext {
  animateSparks: (x: number, y: number) => void;
  renderCanvas: () => JSX.Element;
}

export const CanvasContext = createContext<ICanvasContext>({
  animateSparks: () => {},
  renderCanvas: () => <></>,
});

const CanvasProvider: FC<IProps> = ({children}) => {
  const particles: Particle[] = [];
  var colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
  var gravity = 0.09;

  function initParticles(x: number, y: number) {
    for (var i = 0; i < 20; i++) {
      setTimeout(() => createParticle(i, x, y), i);
    }
  }

  function createParticle(i: number, x: number, y: number) {
    // initial position in middle of canvas
    // var x = width * 0.5;
    // var y = height * 0.5;
    // randomize the vx and vy a little - but we still want them flying 'up' and 'out'
    var vx = -2 + Math.random() * 4;
    var vy = Math.random() * -3;
    // randomize size and opacity a little & pick a color from our color palette
    var size = 5 + Math.random() * 5;
    var color = colors[i % colors.length];
    var opacity = 0.5 + Math.random() * 0.5;
    var p = new Particle(x, y, vx, vy, size, color, opacity);
    particles.push(p);
  }

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
    finished: boolean = false;

    constructor(x: number, y: number, vx: number, vy: number, size: number, color: string, opacity: number) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.size = size;
      this.color = color;
      this.opacity = opacity;
    }
    reset() {
      this.opacity = 0;
      this.finished = true;
    }

    update() {
      // if a particle has faded to nothing we can reset it to the starting position
      if (this.opacity - 0.005 > 0) this.opacity -= 0.005;
      else this.reset();

      // add gravity to vy
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
    }

    draw(canvas: SkCanvas) {
      const paint = Skia.Paint();
      paint.setAntiAlias(false);
      paint.setColor(Skia.Color('yellow'));
      canvas.drawCircle(this.x, this.y, 1, paint);
      // canvas.drawRect(rect(x, y, size, size), paint);
    }
  }

  function render(canvas: SkCanvas) {
    for (var i = 0; i < particles.length; i++) {
      if (particles[i].finished === true) {
        particles.splice(i, 1);
      } else {
        particles[i].update();
        particles[i].draw(canvas);
      }
    }
  }

  const onDraw = useDrawCallback(canvas => {
    render(canvas);
  });

  const animateSparks = (x: number, y: number) => {
    initParticles(x, y);
  };

  const renderCanvas = () => {
    return <StyledCanvas width={width} height={height} onDraw={onDraw} mode="continuous" />;
  };
  return <CanvasContext.Provider value={{animateSparks, renderCanvas}}>{children}</CanvasContext.Provider>;
};

export default CanvasProvider;

const StyledCanvas = styled(SkiaView)<{width: number; height: number}>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  flex: 1;
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
`;
