let manu = document.querySelector(".manu-bar");
let sideBar = document.querySelector(".nav-side-bar");

let counter = 0;

manu.addEventListener("click", function () {
  //   console.log(manu);
  if (counter == 0) {
    sideBar.style.display = "flex";
    counter++;
  } else {
    sideBar.style.display = "none";
    counter--;
  }
});
