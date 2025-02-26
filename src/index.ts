import getAvgRGBFromImage from "./getAvgRGBFromImage";

export default async function(src: string) {

  const { r, g, b } = await getAvgRGBFromImage(src);
  const color = `rgb(${r},${g},${b})`
  const root = document.documentElement;
  const tabColor = document.querySelector('[name="theme-color"]') as HTMLMetaElement;
  const lightness = {
    light: {
      dynamic: '80%',
      highContrast: '100%'
    },
    dark: {
      dynamic: '20%',
      highContrast: '0%'
    }
  };
  const theme = 'light';
  const type = 'dynamic';

  root.style.setProperty('--color', `oklch(from ${color} l c h)`);
  root.style.setProperty('--lightness', lightness[theme][type]);
  tabColor.content = `oklch(from ${color} ${lightness[theme][type]} c h)`;

  return color;
}
