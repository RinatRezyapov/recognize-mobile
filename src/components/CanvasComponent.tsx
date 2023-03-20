import React from 'react';

import { Dimensions, View } from 'react-native';

import {
  rect,
  Skia,
  SkiaView,
  useDrawCallback
} from '@shopify/react-native-skia';

const paint = Skia.Paint();
paint.setAntiAlias(false);
paint.setColor(Skia.Color('yellow'));

const { width, height } = Dimensions.get('screen');

interface IProps {
  children: any;
}

const CanvasComponent: React.FC<IProps> = ({ children }) => {
  const particles = [];
  var colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
  var gravity = 0.04;

  function initParticles(x, y) {
    for (var i = 0; i < 100; i++) {
      createParticle(i, x, y)
      //setTimeout(createParticle, 20 * i, i);
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

    this.draw = function (canvas) {
      canvas.drawRect(rect(x, y, size, size), paint);
    }
  }

  function render(canvas) {
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

  const onClick = (x, y) => {
    initParticles(x, y);
    //initParticles(e.nativeEvent.locationX, e.nativeEvent.locationY);
    //console.log(e.nativeEvent.locationX, e.nativeEvent.locationY);

    //render(canvas.current)
  }

  return (
    // <TouchableOpacity onPress={onClick}  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <View>
      {React.cloneElement(children, { animate: onClick } )}
      <SkiaView style={{ position: 'absolute', borderColor: 'red', zIndex: -1, borderWidth: 1, top: 0, left: 0, width: '100%', height: '100%' }} onDraw={onDraw} mode="continuous" />
    </View>
    // </TouchableOpacity >
  );
}

export default CanvasComponent;
