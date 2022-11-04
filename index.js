const menuBar = document.getElementById("menubar")
const body = document.body
function openMenu() {
   menuBar.style.setProperty("--barWidth", "280px")
   body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeMenu() {
   menuBar.style.setProperty("--barWidth", "0px")
   body.style.backgroundColor = "white";
}
