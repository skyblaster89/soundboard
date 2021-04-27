function smack1() {
  var smacksound = new Audio('https://www.soundjay.com/mechanical/sounds/smack-1.mp3'); 
  smacksound.play();
  }
function clonk() {
  var clonksound = new Audio('https://www.soundjay.com/mechanical/sounds/mechanical-clonk-1.mp3');
  clonksound.play();  
  }
function clong() {
  var clongsound = new Audio('https://www.soundjay.com/mechanical/sounds/clong-2.mp3');
  clongsound.play();  
  }
function spray() {
  var spraysound = new Audio('https://www.soundjay.com/bathroom/sounds/deodorant-spray-2.mp3');
  spraysound.play();  
  }
function laugh() {
  var laughsound = new Audio('https://www.zedge.net/ringtone/f305c61f-96cf-4998-8e35-834750fa52fb');
  laughsound.play();
}

document.addEventListener('keydown', smack);
function smack(){
  if(event.keyCode == 37){
    var smacksound = new Audio('https://www.soundjay.com/mechanical/sounds/smack-1.mp3'); 
    smacksound.play();
  }
  else if(event.keyCode == 39){
    var clonksound = new Audio('https://www.soundjay.com/mechanical/sounds/mechanical-clonk-1.mp3');
    clonksound.play(); 
  }
  else if(event.keyCode == 38){
    var clongsound = new Audio('https://www.soundjay.com/mechanical/sounds/clong-2.mp3');
    clongsound.play();
  }
  else if(event.keyCode == 40){
    var spraysound = new Audio('https://www.soundjay.com/bathroom/sounds/deodorant-spray-2.mp3');
    spraysound.play();
  }
  else if(event,keycode == 97){
    var laughsound = document.getElementById("laugh");
    laughsound.play();
  }
}
