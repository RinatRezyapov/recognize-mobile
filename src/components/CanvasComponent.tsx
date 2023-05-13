import React from 'react';

import {Dimensions, View} from 'react-native';

import {rect, SkCanvas, Skia, SkiaView, useDrawCallback} from '@shopify/react-native-skia';

const paint = Skia.Paint();
paint.setAntiAlias(false);
paint.setColor(Skia.Color('yellow'));

const colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
const gravity = 0.04;

function Particle(x: number, y: number, vx: number, vy: number, size: number, color: string, opacity: number) {
  function reset() {
    opacity = 0;
    this.finished = true;
  }

  this.update = function () {
    if (opacity - 0.005 > 0) opacity -= 0.005;
    else reset();

    vy += gravity;
    x += vx;
    y += vy;
  };

  this.draw = function (canvas: SkCanvas) {
    canvas.drawRect(rect(x, y, size, size), paint);
  };
}

interface IProps {
  children: any;
}

const CanvasComponent: React.FC<IProps> = ({children}) => {
  const particles: any[] = [];

  function initParticles(x: number, y: number) {
    for (var i = 0; i < 100; i++) {
      createParticle(i, x, y);
    }
  }

  function createParticle(i, x, y) {
    var vx = -2 + Math.random() * 4;
    var vy = Math.random() * -3;
    var size = 5 + Math.random() * 5;
    var color = colors[i % colors.length];
    var opacity = 0.5 + Math.random() * 0.5;
    var p = new Particle(x, y, vx, vy, size, color, opacity);
    particles.push(p);
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

  const onClick = (x: number, y: number) => {
    initParticles(x, y);
  };

  return (
    <View>
      {React.cloneElement(children, {animate: onClick})}
      <SkiaView
        style={{
          position: 'absolute',
          borderColor: 'red',
          zIndex: -1,
          borderWidth: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        onDraw={onDraw}
        mode="continuous"
      />
    </View>
  );
};

export default CanvasComponent;
