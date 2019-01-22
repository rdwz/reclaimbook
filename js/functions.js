function ge(el) {
  return document.getElementById(el)
}

function drawText(text) {
  var c = ge('canvas');
  var ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#ffe303";
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
        return i == row && j == column;
      } 
    
      function adjust(number, amount, condition) {
        if (condition) 
          return number + amount;
        else
          return number;
      }
    
      var offsetX = 84.0;
      var offsetY = 88.0;
    
      function goLeft(amount, condition) {
        offsetX = adjust(offsetX, -amount, condition);
      }
    
      function goRight(amount, condition) {
        offsetX = adjust(offsetX, amount, condition);
      }
    
      function goUp(amount, condition) {
        offsetY = adjust(offsetY, -amount, condition);
      }
    
      function goDown(amount, condition) {
        offsetY = adjust(offsetY, amount, condition);
      }

      var jOffset = 0;
      if (j == 1) {
        jOffset = 291;
      } else if (j == 2) {
        jOffset = 565;
      }
      ctx.fillText(text.toUpperCase(), offsetX + jOffset, offsetY + (i * 31));
    }
  }
}

function readURL(file) {
  var imagePreview = ge('imagePreview');
  imagePreview.src = URL.createObjectURL(file);
  
  setTimeout(updateText, 100);
}

function updateText() {
  var textField = ge('textField');
  textField.value = textField.value.toUpperCase();
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
