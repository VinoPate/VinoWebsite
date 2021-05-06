$(function(){

   console.log("I should be playing audio");

   var sound = new Howl({
    src: ['./sounds/Pate.mp3'],
    volume: 0.5
  });
  
  $("#howler-play").on("click", function(){
    sound.play();
});

$("#howler-pause").on("click", function(){
    sound.pause();
});

$("#howler-stop").on("click", function(){
    sound.stop();
});

$("#howler-volup").on("click", function(){
    var vol = sound.volume();
    vol += 0.1;
    if (vol > 1) {
        vol = 1;
    }
    sound.volume(vol);
});

$("#howler-voldown").on("click", function(){
    var vol = sound.volume();
    vol -= 0.1;
    if (vol < 0) {
        vol = 0;
    }
    sound.volume(vol);
});

$("cursor-change").on("click", function(){
    console.log("Did it change?");
    $("html").css("cursor: url('http://www.rw-designer.com/cursor-extern.php?id=110025'), auto");
});

$("tester").on("click", function(){
    console.log("Print Test?");
});

});