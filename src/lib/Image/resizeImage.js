export function resizeImage(url, w, h, fileType, iW, iH, callback) {
  var sourceImage = new Image();
  const ratio = w / h;
  let newWidth = w, newHeight = h;
  if (w > iW || h > iH) {
    if (w > iW) {
      newWidth = iW;
      newHeight = iW / ratio;
    } else {
      newHeight = iH;
      newWidth = iH * ratio;
    }
  }
  sourceImage.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;
    canvas
      .getContext('2d')
      .drawImage(sourceImage, 0, 0, newWidth, newHeight);
    const imageData = fileType === 'image/jpeg' ? canvas.toDataURL(fileType) : canvas.toDataURL();
    if (callback) callback(imageData);
  };
  sourceImage.src = url;
}

