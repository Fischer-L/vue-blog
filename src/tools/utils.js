// This utils.js stores the useful utility functions across components
function matchScreenSize(window, sizeType) {
  let mediaTypes = {
    big: "(min-width: 1024px)",
    mid: "(min-width: 768px)",
    small: "(min-width: 414px)",
    xsmall: "(min-width: 320px)",
  };
  let media = mediaTypes[sizeType];
  return media ? window.matchMedia(media).matches : false;
}

export function getBestFitMainImg(window, mainImg) {
  let sizes = [ "big", "mid", "small", "xsmall" ];
  let best = mainImg.basic;
  for (let i = sizes.length; i >= 0; --i) {
    let s = sizes[i];
    if (mainImg[s] && matchScreenSize(window, s)) {
      best = mainImg[s];
      break;
    }
  }
  return best;
}
