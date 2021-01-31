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

document.getElementById('th_1').style.top = randomNr1() + 'px';
document.getElementById('th_1').style.left = randomNr2() + 'px';
document.getElementById('th_2').style.top = randomNr1() + 'px';
document.getElementById('th_2').style.left = randomNr2() + 'px';
document.getElementById('th_3').style.top = randomNr1() + 'px';
document.getElementById('th_3').style.left = randomNr2() + 'px';
document.getElementById('th_4').style.top = randomNr1() + 'px';
document.getElementById('th_4').style.left = randomNr2() + 'px';
document.getElementById('th_5').style.top = randomNr1() + 'px';
document.getElementById('th_5').style.left = randomNr2() + 'px';
document.getElementById('th_6').style.top = randomNr1() + 'px';
document.getElementById('th_6').style.left = randomNr2() + 'px';
document.getElementById('th_7').style.top = randomNr1() + 'px';
document.getElementById('th_7').style.left = randomNr2() + 'px';
document.getElementById('th_8').style.top = randomNr1() + 'px';
document.getElementById('th_8').style.left = randomNr2() + 'px';
document.getElementById('th_9').style.top = randomNr1() + 'px';
document.getElementById('th_9').style.left = randomNr2() + 'px';
document.getElementById('th_10').style.top = randomNr1() + 'px';
document.getElementById('th_10').style.left = randomNr2() + 'px';
document.getElementById('th_11').style.top = randomNr1() + 'px';
document.getElementById('th_11').style.left = randomNr2() + 'px';
document.getElementById('th_12').style.top = randomNr1() + 'px';
document.getElementById('th_12').style.left = randomNr2() + 'px';

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
   var x = Math.floor((Math.random() * 600) + 0); //random number between 0 and 600
   return x;
}

function randomNr2(){
   var x = Math.floor((Math.random() * 710) + 90); //random number between 90 and 800
   return x;
}

window.onload = function() {
  var orderButton = document.getElementById("order");
  var shuffleButton = document.getElementById("shuffle");
  var colorizeButton = document.getElementById("colorize");
  orderButton.onclick = function() {
    document.getElementById('th_1').style.top = 65 + 'px';
    document.getElementById('th_1').style.left = 210 + 'px';
    document.getElementById('th_2').style.top = 65 + 'px';
    document.getElementById('th_2').style.left = 430 + 'px';
    document.getElementById('th_3').style.top = 65 + 'px';
    document.getElementById('th_3').style.left = 650 + 'px';
    document.getElementById('th_4').style.top = 65 + 'px';
    document.getElementById('th_4').style.left = 870 + 'px';
    document.getElementById('th_5').style.top = 219 + 'px';
    document.getElementById('th_5').style.left = 210 + 'px';
    document.getElementById('th_6').style.top = 219 + 'px';
    document.getElementById('th_6').style.left = 430 + 'px';
    document.getElementById('th_7').style.top = 219 + 'px';
    document.getElementById('th_7').style.left = 650 + 'px';
    document.getElementById('th_8').style.top = 219 + 'px';
    document.getElementById('th_8').style.left = 870 + 'px';
    document.getElementById('th_9').style.top = 373 + 'px';
    document.getElementById('th_9').style.left = 210 + 'px';
    document.getElementById('th_10').style.top = 373 + 'px';
    document.getElementById('th_10').style.left = 430 + 'px';
    document.getElementById('th_11').style.top = 373 + 'px';
    document.getElementById('th_11').style.left = 650 + 'px';
    document.getElementById('th_12').style.top = 373 + 'px';
    document.getElementById('th_12').style.left = 870 + 'px';
    return false;
  }
  shuffleButton.onclick = function() {
    document.getElementById('th_1').style.top = randomNr1() + 'px';
    document.getElementById('th_1').style.left = randomNr2() + 'px';
    document.getElementById('th_2').style.top = randomNr1() + 'px';
    document.getElementById('th_2').style.left = randomNr2() + 'px';
    document.getElementById('th_3').style.top = randomNr1() + 'px';
    document.getElementById('th_3').style.left = randomNr2() + 'px';
    document.getElementById('th_4').style.top = randomNr1() + 'px';
    document.getElementById('th_4').style.left = randomNr2() + 'px';
    document.getElementById('th_5').style.top = randomNr1() + 'px';
    document.getElementById('th_5').style.left = randomNr2() + 'px';
    document.getElementById('th_6').style.top = randomNr1() + 'px';
    document.getElementById('th_6').style.left = randomNr2() + 'px';
    document.getElementById('th_7').style.top = randomNr1() + 'px';
    document.getElementById('th_7').style.left = randomNr2() + 'px';
    document.getElementById('th_8').style.top = randomNr1() + 'px';
    document.getElementById('th_8').style.left = randomNr2() + 'px';
    document.getElementById('th_9').style.top = randomNr1() + 'px';
    document.getElementById('th_9').style.left = randomNr2() + 'px';
    document.getElementById('th_10').style.top = randomNr1() + 'px';
    document.getElementById('th_10').style.left = randomNr2() + 'px';
    document.getElementById('th_11').style.top = randomNr1() + 'px';
    document.getElementById('th_11').style.left = randomNr2() + 'px';
    document.getElementById('th_12').style.top = randomNr1() + 'px';
    document.getElementById('th_12').style.left = randomNr2() + 'px';
    return false;
  }
  colorizeButton.onclick = function() {
    document.getElementById('th_1').style.animation-name = "colorize";
    document.getElementById('th_1').style.animation-duration= "2s";
    document.getElementById('th_1').style.animation-fill-mode: "forwards";
    return false;
  }
}


