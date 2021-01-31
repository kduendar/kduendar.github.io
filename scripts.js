let thumbnails = [document.getElementById("th_1"), document.getElementById("th_2"), document.getElementById("th_3"), document.getElementById("th_4"), document.getElementById("th_5"), document.getElementById("th_6"), document.getElementById("th_7"), document.getElementById("th_8"), document.getElementById("th_9"), document.getElementById("th_10"), document.getElementById("th_11"), document.getElementById("th_12")]

var i;
for (i = 0; i < thumbnails.length; i++) {
    dragElement(thumbnails[i]);
}

shuffleThumbnails();

function shuffleThumbnails() {
    var j;
    for (j = 0; j < thumbnails.length; j++) {
        thumbnails[j].style.top = randomNr1() + 'px';
        thumbnails[j].style.left = randomNr2() + 'px';
    }
    return false;
}
 
function orderThumbnails() {
	thumbnails[0].style.top = 65 + 'px';
    thumbnails[0]style.left = 210 + 'px';
    thumbnails[1]style.top = 65 + 'px';
    thumbnails[1]style.left = 430 + 'px';
    thumbnails[2]style.top = 65 + 'px';
    thumbnails[2]style.left = 650 + 'px';
    thumbnails[3]style.top = 65 + 'px';
    thumbnails[3]style.left = 870 + 'px';
    thumbnails[4]style.top = 219 + 'px';
    thumbnails[4]style.left = 210 + 'px';
    thumbnails[5]style.top = 219 + 'px';
    thumbnails[5]style.left = 430 + 'px';
    thumbnails[6]style.top = 219 + 'px';
    thumbnails[6]style.left = 650 + 'px';
    thumbnails[7]style.top = 219 + 'px';
    thumbnails[7]style.left = 870 + 'px';
    thumbnails[8]style.top = 373 + 'px';
    thumbnails[8]style.left = 210 + 'px';
    thumbnails[9].style.top = 373 + 'px';
    thumbnails[9].style.left = 430 + 'px';
    thumbnails[10].style.top = 373 + 'px';
    thumbnails[10].style.left = 650 + 'px';
    thumbnails[11].style.top = 373 + 'px';
    thumbnails[11].style.left = 870 + 'px';
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


