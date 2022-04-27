/* eslint-disable @typescript-eslint/ban-ts-comment */
export function resizeRem() {
  let winWidth = 0;
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  } else if (document.body && document.body.clientWidth) {
    winWidth = document.body.clientWidth;
  }

  if (winWidth > 750) {
    winWidth = 750;
  }
  //   window.
  // @ts-ignore
  window.gScale = winWidth / 750;
  const fontSize = winWidth / 7.5;
  // @ts-ignore
  document.querySelector('html').style.fontSize = `${fontSize}px`;
}
