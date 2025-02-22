import extractRGBFromImage from "./extractRGBFromImage";
import getHSLFromRGB from "./getHSLFromRGB";

export default async function(src: string) {
  const { h, s, l } = getHSLFromRGB(
    await extractRGBFromImage(src)
  );

  const root = document.documentElement;
  const schemes = {
    light: ['#eee', 'red'],
    dark: ['#111', '#eee'],
    white: ['#fff', '#000'],
    black: ['#000', '#fff']
  };
  const tabcolor = document.querySelector('[name="theme-color"]') as HTMLMetaElement;

  root.style.setProperty('--pixim-color', `hsl(${h},${s},${l})`);
  root.style.setProperty('--pixim-scheme', schemes.light[0]);

  tabcolor.content = `hsl(${h},30%,80%)`;


}
