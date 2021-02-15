function showIt() {
    document.getElementById("div1").style.visibility = "visible";
  }
  setTimeout("showIt()", 3000); // after 3 secs


  // !!! when all that is commented out is erased the first part functions (why it matters?)!!!

//   var w = window.innerWidth/2;
//   var h = window.innerHeight/2;
  // function center() {


//   var element = document.getElementById("div1");
//   element.style.left = x + "px";
//   element.style.top = y + "px";
// }

// document.getElementById("div1").style.left = w + "px";
// document.getElementById("div1").style.top = h + "px";
}
// window.onload = () => {
//     const dog = document.getElementById("div1");
//     dog.addEventListener("mouseover", () => {
//       dog.style.width = "500px";
//     });
//     dog.addEventListener("mouseout", () => {
//       dog.style.width = "200px";
//     });
//   };

//   window.onclick = () => {
//     const dog = document.getElementById("div1");
//     dog.addEventListener("onclick", () => {
//       dog.style.top = "w";
//       dog.style.left = "h";
//     });
//   };

// var position []
// position[0].style.position = "absolute";
// position[0].style.left = w + 'px';
// position[0].style.top = h + 'px';
// document.body.appendChild(position[0]);