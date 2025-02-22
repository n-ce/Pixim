export default function(rgb: {
  r: number,
  g: number,
  b: number
}): {
  h: number,
  s: string,
  l: string
} {
  // Normalize RGB values to the range [0, 1]

  const red = rgb.r / 255;
  const green = rgb.g / 255;
  const blue = rgb.b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    // Achromatic (gray)
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case red:
        h = (green - blue) / d + (green < blue ? 6 : 0);
        break;
      case green:
        h = (blue - red) / d + 2;
        break;
      case blue:
        h = (red - green) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.floor(h * 360),
    s: Math.floor(s * 100) + '%',
    l: Math.floor(l * 100) + '%'
  };

}

