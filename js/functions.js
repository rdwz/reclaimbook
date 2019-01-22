function ge(el) {
  return document.getElementById(el)
}

function drawText(text) {
  var c = ge('canvas');
  var ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#ffe303";
  ctx.clearRect(20, 20, c.width, c.height);
  ctx.fillStyle = "#fffff";
  ctx.fillRect(0, 0, c.width, c.height);
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
  
  ctx.font = 'bold 27px Times New Roman';

  var text = text.replace(/ /g, '  ');
  
  for (var j = 0; j <= 2; j++) {
    for (var i = 0; i <= 1; i++) {
      function at(row, column) {
        return j == column;
      } 
    
      function adjust(number, amount, condition) {
        if (condition) 
          return number + amount;
        else
          return number;
      }
    
      var offsetX = 84.0;
      var offsetY = 88.0;

      var jOffset = 0;
      if (j == 1) {
        jOffset = 291;
      } 
      ctx.fillText(text, offsetX + jOffset, offsetY);
    }
  }
}

function updateText() {
  var textField = ge('textField');
  drawText(textField.value);
}

function download() {
  //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  //window.location.href = image;
  location.href = ge('canvas').toDataURL();
}

onload = function() {
  ge('textField').oninput = updateText;
  updateText();
}
