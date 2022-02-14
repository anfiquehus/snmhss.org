/* hiding Header Javascript started */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "20px";
  } else {
    document.getElementById("header").style.top = "-82px";
  }
  prevScrollpos = currentScrollPos;
}

/* hiding Header Javascript closed */