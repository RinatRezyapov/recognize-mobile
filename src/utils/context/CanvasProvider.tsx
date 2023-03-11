import React, { createContext } from 'react';

import { Dimensions } from 'react-native';

import {
  rect,
  SkCanvas,
  Skia, SkiaView, useDrawCallback
} from '@shopify/react-native-skia';


const { width, height } = Dimensions.get('screen');

interface IProps {
  children: any;
}


export const CanvasContext = createContext('hey');
const CanvasProvider = ({ children }) => {
  const particles = [];
  var colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
  var gravity = 0.09;

  function initParticles(x, y) {
    for (var i = 0; i < 20; i++) {

      setTimeout(() => createParticle(i, x, y), i);
    }
  }

  function createParticle(i, x, y) {
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

  function Particle(x, y, vx, vy, size, color, opacity) {

    function reset() {
      opacity = 0;
      this.finished = true;
    }

    this.update = function () {
      // if a particle has faded to nothing we can reset it to the starting position
      if (opacity - 0.005 > 0) opacity -= 0.005;
      else reset();

      // add gravity to vy
      vy += gravity;
      x += vx;
      y += vy;
    }

    this.draw = function (canvas: SkCanvas) {
      const paint = Skia.Paint();
      paint.setAntiAlias(false);
      paint.setColor(Skia.Color('yellow'));
      canvas.drawCircle(x, y, 1, paint);
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

  const onDraw = useDrawCallback((canvas) => {
    render(canvas);
  });

  const animateSparks = (x, y) => {
    initParticles(x, y);
  }

  const renderCanvas = () => {
    return <SkiaView style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }} onDraw={onDraw} mode="continuous" />
  }
  return <CanvasContext.Provider value={{ animateSparks, renderCanvas }}>
    {children}
  </CanvasContext.Provider>
}

export default CanvasProvider;