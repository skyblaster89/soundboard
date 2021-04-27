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
  document.getElementById("laugh").play();
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
  else if(event.keycode == 76){
    var element = document.querySelector('laugh');
element.click();
  }
}
