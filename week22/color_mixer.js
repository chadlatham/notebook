'use strict';

function colorMixer() {
  const colors = [...arguments];
  const newColor = [0, 0, 0];

  if (!colors.length) {
    throw new Error('Must have at least 1 argument');
  }

  for (const color of colors) {
    if (color[0] === undefined || color[1] === undefined || color[2] === undefined) {

      throw new Error('Parameter must have 3 numbers');
    }

    newColor[0] += color[0];
    newColor[1] += color[1];
    newColor[2] += color[2];
  }

  newColor[0] = Math.round(newColor[0] / colors.length);
  newColor[1] = Math.round(newColor[1] / colors.length);
  newColor[2] = Math.round(newColor[2] / colors.length);

  return newColor;
}

var red = [255, 0, 0];
var green = [0, 255, 0];

// console.log(colorMixer(red, green));


// console.log([red, green].reduce((prev, cur, index, arr) => {
//   prev[0] += cur[0];
//   prev[1] += cur[1];
//   prev[2] += cur[2];
//   return prev;
// }, [0, 0, 0]));
