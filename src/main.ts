import Pixim from '.';

import './style.css';
const main = document.body.firstElementChild as HTMLDivElement;
const [button, img, info] = main.children;

const src = 'https://picsum.photos/' + Math.floor(0.9 * innerWidth * devicePixelRatio) + '.webp';
(<HTMLImageElement>img).src = src;
button.addEventListener('click', () => {
  main.classList.toggle('info');
  console.log(true);
});

info.textContent = src;
console.log(await Pixim(src));
