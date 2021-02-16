var canvas;
var img = null;
var grayimg = null;
var rainimg = null;
var redimg = null;
var micimg = null;
var blurimg = null;
var file;
var count = 0;

function clearc(){
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  if(img != null){
    img.drawTo(canvas);
  }
  
  grayimg = new SimpleImage(file);
  rainimg = new SimpleImage(file);
  redimg = new SimpleImage(file);
  micimg = new SimpleImage(file);
  blurimg = new SimpleImage(file);
}

function upload(){
  file = document.getElementById("file");
  img = new SimpleImage(file);
  
  canvas = document.getElementById("can1");
  img.drawTo(canvas);
  alert("Image is loaded!");
  
  grayimg = new SimpleImage(file);
  rainimg = new SimpleImage(file);
  redimg = new SimpleImage(file);
  micimg = new SimpleImage(file);
  blurimg = new SimpleImage(file);
}

function gray(){
  //var ctx = canvas.getContext("2d");
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  if(grayimg == null || !grayimg.complete()) {
    alert("Image is not loaded!");
  }
  else{
    var grayfinalimg = dogray();
    grayfinalimg.drawTo(canvas);
  }
}

function dogray(){
  //count++;
  //document.getElementById("one").innerHTML=count;
   for(var pixel of grayimg.values()){
      var avg = (pixel.getGreen()+
                 pixel.getRed()+pixel.getBlue())/3
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
    return grayimg;
}

function red(){
  //var ctx = canvas.getContext("2d");
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  
  if(redimg == null || !redimg.complete()){
    alert("Image is not loaded!");
  }
  else{
    var finalredimg = dored();
    finalredimg.drawTo(canvas);
  }
}
  
function dored(){
   for(var pixel of redimg.values()){
      var avg = (pixel.getRed()+pixel.getBlue()+
          pixel.getGreen())/3;
      if(avg<=128){
        pixel.setRed(2*avg);
        pixel.setBlue(0);
        pixel.setGreen(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    return redimg;
  }

function Makemicro(){
  //var ctx = canvas.getContext("2d");
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  
  if(micimg == null || !micimg.complete()){
    alert("Image is not loaded!");
  }
  else{
    var finalmicimg = domicro();
    finalmicimg.drawTo(canvas);
  }
}

function domicro(){
  var width = (micimg.getWidth()/2);
  var height = (micimg.getHeight()/2);
  var w = micimg.getWidth();
  var h = micimg.getHeight();

  for(var pixel of micimg.values()){
     var x = pixel.getX();
     var y = pixel.getY();
     var avg =  (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
   if(x>10 && x<width-20 && y>10 && y<height-20){
       if(avg<128){
           pixel.setRed(2*avg);
           pixel.setBlue(0);
           pixel.setGreen(0);
       }
       else{
           pixel.setRed(255);
           pixel.setBlue(2*avg-255);
           pixel.setGreen(2*avg-255);
       }
   }
   
   if(x<w-10 && x>width+20  && y>10 && y<height-20){
        if(avg<128){
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
           pixel.setRed(0);
       }
       else{
           pixel.setGreen(255);
           pixel.setBlue(2*avg-255);
           pixel.setRed(2*avg-255);
       }
   }
   if(x>10 && x<width-20 && y<h-10 && y>height+20){
          if(avg<128){
           pixel.setBlue(2*avg);
           pixel.setGreen(0);
           pixel.setRed(0);
       }
       else{
           pixel.setBlue(255);
           pixel.setGreen(2*avg-255);
           pixel.setRed(2*avg-255);
       }
   }
   else if(x<w-10 && x>width+20 && y<h-10 && y>height+20){
          if(avg<128){
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
           pixel.setRed(2*avg);
       }
       else{
           pixel.setGreen(255);
           pixel.setBlue(2*avg-255);
           pixel.setRed(255);
       }
   }
}
  return micimg;
}

function rainbow(){
  if(rainimg == null || !rainimg.complete()){
    alert("Image is not loaded!");
  }
  else{
    var finalrainimg = dorain();
    finalrainimg.drawTo(canvas);
  }
}

function dorain(){
  var width = rainimg.getWidth();
  var height = rainimg.getHeight();
  
  for(var pixel of rainimg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    
    if(y<=height/7){
       if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(0);
           pixel.setBlue(0);
       }
       else{
           pixel.setRed(255);
           pixel.setGreen(2*avg-255);
           pixel.setBlue(2*avg-255);
       }
    }
    if(y>(height/7) && y<=(2*height)/7){
         if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(0.8*avg);
           pixel.setBlue(0);
       }
       else{
           pixel.setRed(255);
           pixel.setGreen(1.2*avg-51);
           pixel.setBlue(2*avg-255);
       }
   }
    if(y>(2*height/7) && y<=(3*height)/7){
               if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
       }
       else{
           pixel.setRed(255);
           pixel.setGreen(255);
           pixel.setBlue(2*avg-255);
       }
   } 
   if(y>(3*height/7) && y<=(4*height)/7){
       if(avg<128){
           pixel.setRed(0);
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
       }
       else{
           pixel.setRed(2*avg-255);
           pixel.setGreen(255);
           pixel.setBlue(2*avg-255);
       }
   } 
      if(y>(4*height/7) && y<=(5*height)/7){
       if(avg<128){
         pixel.setRed(0);
           pixel.setGreen(0);
           pixel.setBlue(2*avg);
       }
       else{
           pixel.setRed(2*avg-255);
           pixel.setGreen(2*avg - 255);
           pixel.setBlue(255);
       }
   }
  if(y>(5*height/7) && y<=(6*height)/7){
       if(avg<128){
           pixel.setRed(0.8*avg);
           pixel.setGreen(0);
           pixel.setBlue(2*avg);
       }
       else{
           pixel.setRed(1.2*avg-51);
           pixel.setGreen(2*avg - 255);
           pixel.setBlue(255);
       }
   }
else if(y>(6*height/7) && y<=height){
  if(avg<128){
           pixel.setRed(1.6*avg);
           pixel.setGreen(0);
           pixel.setBlue(1.6*avg);
       }
       else{
           pixel.setRed(0.4*avg+153);
           pixel.setGreen(2*avg - 255);
           pixel.setBlue(0.4*avg+153);
       }
   } 
}
  return rainimg;
}

function blur(){
  if(blurimg == null || !blurimg.complete()){
    alert("Image is not loaded!");
  }
  else{
    doblur();
    blurimg.drawTo(canvas);
  }
}

function doblur(){
  for(var pixel of blurimg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var random = Math.random();
    
    if(random<0.6){
      blurimg.setPixel(x,y,pixel);
    }
    else{
     nearbypixel(x,y);
    }
  }
}
function nearbypixel(x,y) {
  var w = blurimg.getWidth();
  var h = blurimg.getHeight();
  var tempx = x + Math.floor(5 * random);
  var tempy = y + Math.floor(5 * random);
  if(tempx >= w) {
    tempx = w - Math.floor(5 * random) - 1;
  }  
  if(tempy >= h) {
    tempy = h - Math.floor(5 * random) -1;  
  }
    var newPix = blurimg.getPixel(tempx, tempy);
    blurimg.setPixel(x,y,newPix);
}