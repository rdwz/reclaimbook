function ge(el) {
  return document.getElementById(el)
}

function drawText(text) {
  var c = ge('canvas');
  var ctx = c.getContext('2d');
  ctx.fillStyle = "#ffe303";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(50, 50, 540, c.height/4);
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(50, 300, 540, 10);
  ctx.fillStyle = "rgb(0, 0, 0)";

  var destinationWidth = 236.0;
  var destinationHeight = 165.0;
  
  var img = ge('imagePreview');
  var hRatio = img.width / destinationWidth;
  var vRatio = img.height / destinationHeight;
  var ratio = Math.min(hRatio, vRatio);
  
  var scaledWidth = img.width / ratio;
  var scaledHeight = img.height / ratio;
  
  var xToOffset = (destinationWidth - scaledWidth) / 2.0;
  var yToOffset = (destinationHeight - scaledHeight) / 2.0;
  
  ctx.drawImage(img, 0, 0, img.width, img.height, 134, 788, destinationWidth, destinationHeight);
  ctx.font = 'normal 45px Playfair Display, serif';

  var offsetX = 84.0;
  var offsetY = 120.0;
  ctx.fillText(text, offsetX, offsetY);
}

function updateText() {
  var textField = ge('textField');
  drawText(textField.value);
}

function download_image(){
  var canvas = ge("canvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "mein-buchcover.png";
  link.href = image;
  link.click();
}

onload = function() {
  ge('textField').oninput = updateText;
  updateText();
}