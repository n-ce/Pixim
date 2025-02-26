import Pixim from '.';
import './style.css';

const main = document.body.firstElementChild as HTMLDivElement;
const [reloadBtn, infoBtn] = document.getElementsByTagName('button');
const img = document.querySelector('img') as HTMLImageElement;
const info = document.querySelector('p') as HTMLParagraphElement;

function generate() {
  const px = Math.floor(0.9 * innerWidth * devicePixelRatio);
  const src = `https://picsum.photos/${px}.webp`;
  img.src = src;
  info.textContent = px + 'px';
}

infoBtn.addEventListener('click', () => {
  main.classList.toggle('info');
});
reloadBtn.addEventListener('click', generate);

img.addEventListener('load', async () => {
  console.log(await Pixim(img.src));
});
generate();
