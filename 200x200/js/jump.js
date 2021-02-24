function showIt() {
    document.getElementById("div1").style.visibility = "visible";
  }
  setTimeout("showIt()", 3000); // after 3 secs


  // !!! when all that is commented out is erased the first part functions (why it matters?)!!!



  function center() {

    var w = window.innerWidth/2-100;
    var h = window.innerHeight/2-100;

  var element = document.getElementById("div1");
  element.style.left = w + "px";
  element.style.top = h + "px";


}
window.addEventListener("resize",function(){
  center();
})
// first event what are you ListeningStateChangedEvent, mouse OverconstrainedError, mouseout, down, and the secon event is a function
