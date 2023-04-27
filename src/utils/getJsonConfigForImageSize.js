export function getJsonConfigForImageSize(jsonSize) {
  let imageSize = {w: 120, h: 120};
  if (jsonSize) {
    const {w, h} = jsonSize;
    imageSize.w = parseInt(w) || 120;
    imageSize.h = parseInt(h) || 120;
  }
  return imageSize;
}
