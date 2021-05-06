function clickme(){

   console.log("I should be playing audio");

   var sound = new Howl({
    src: ['./sounds/Pate.mp3'],
    volume: 0.8
  });
  
  sound.play();

}

