// ! Home Sidebar Start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSideBar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});

btnCloseSideBar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

/* click outside start */
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});
/* click outside end */

//! Home Sidebar End
