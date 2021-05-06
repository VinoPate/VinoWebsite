var timer, sound;
sound = new Howl({
  src: ['sounds/Pate.mp3']
});
setInterval(function(){
sound.play();
},1000);