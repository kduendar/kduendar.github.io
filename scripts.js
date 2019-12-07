dragElement(document.getElementById("th_1"));
dragElement(document.getElementById("th_2"));
dragElement(document.getElementById("th_3"));
dragElement(document.getElementById("th_4"));
dragElement(document.getElementById("th_5"));
dragElement(document.getElementById("th_6"));
dragElement(document.getElementById("th_7"));
dragElement(document.getElementById("th_8"));
dragElement(document.getElementById("th_9"));
dragElement(document.getElementById("th_10"));
dragElement(document.getElementById("th_11"));
dragElement(document.getElementById("th_12"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function randomNr1(){
   var x = Math.floor((Math.random() * 560) + 40); //random number between 300 and 800
   return x;
}

function randomNr2(){
   var x = Math.floor((Math.random() * 660) + 40); //random number between 300 and 800
   return x;
}
