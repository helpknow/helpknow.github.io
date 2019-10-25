
var i = 0;
var txt = 'eveloper | JavaScript '; 
var speed = 150; 

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typwriter-effect").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}())

console.log("test............")


//___________________________________________

// let sound;

// function preload() {
//   // preload() runs once
//     sound= loadSound('./sounds/typing_sound.mp3');
// }


// function setup() {

//   sound.play()
// }



