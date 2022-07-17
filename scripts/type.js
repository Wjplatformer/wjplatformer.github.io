var i = 0;
var txt = 'Wjplatformer';
var speed = 100;
var cursor = document.getElementById("typewriterCursor")
  
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }

    if (i >= txt.length) {
        document.getElementById("demo").innerHTML = "";
        i = 0
    }
}