var link = document.querySelectorAll('div')[0];

setInterval(function() {
  var bgPos = getComputedStyle(link)['background-position'];
  var coords = bgPos.split(" ");
  var x = parseInt(coords[0]); // parseInt seems to automatically strip out the 'px'
  var y = parseInt(coords[1]);

  if (y > -1560) { // 1664 - 104
    bgPos = x + 'px ' + (y - 104) + 'px'; // move y by -104
    link.style.backgroundPosition = bgPos;
  } else {
    link.style.backgroundPosition = "0px 0px"; // reset
  }

}, 50);