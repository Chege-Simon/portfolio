var cursor = true;
var speed = 500;
var i = 0;
var name_txt = "Hey, I'm Chege Simon Peter Kimani.";
var typing_speed = 50;

function typeWriterName() {
  if (i < name_txt.length) {
    document.getElementById("name").innerHTML += name_txt.charAt(i);
    i++;
    setTimeout(typeWriterName, typing_speed);
  }
}

setInterval(() => {
  if (cursor) {
    document.getElementById("cursor").style.opacity = 0;
    document.getElementById("terminal_cursor").style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    document.getElementById("terminal_cursor").style.opacity = 1;
    cursor = true;
  }
}, speed);


typeWriterName();

// import { annotate, annotationGroup } from 'rough-notation';

// const a1 = annotate(document.querySelector('#e1'), { type: 'underline' });
// const a2 = annotate(document.querySelector('#e3'), { type: 'box' });
// const a3 = annotate(document.querySelector('#e3'), { type: 'circle' });

// const ag = annotationGroup([a3, a1, a2]);
// ag.show();