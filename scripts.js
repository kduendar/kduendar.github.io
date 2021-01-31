let thumbnails = [document.getElementById("th_1"), document.getElementById("th_2"), document.getElementById("th_3"), document.getElementById("th_4"), document.getElementById("th_5"), document.getElementById("th_6"), document.getElementById("th_7"), document.getElementById("th_8"), document.getElementById("th_9"), document.getElementById("th_10"), document.getElementById("th_11"), document.getElementById("th_12")]

var i;
for (i = 0; i < thumbnails.length; i++) {
    
    dragElement(thumbnails[i]);
    
    thumbnails[i].onmouseover = function(){
        this.setAttribute("style", "animation-name: colorize");
        this.setAttribute("style", "animation-duration: 2s");
        this.setAttribute("style", "animation-fill-mode: forwards");
    }
}

shuffleThumbnails();

function shuffleThumbnails() {
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
 
function orderThumbnails() {
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
  orderButton.onclick = function() {
    orderThumbnails()
    return false;
  }
  
  var thumbnailClass = document.getElementsByClassName("thumbnail");
  var colorizeButton = document.getElementById("colorize"); 
  colorizeButton.onclick = function() {
    thumbnailClass.setAttribute("style", "-webkit-filter:grayscale(0%)");
    thumbnailClass.setAttribute("style", "filter:grayscale(0%)");
    //thumbnails.style.filter: "grayscale(0%)";
    return false;
    }
}


