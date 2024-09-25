let toggleBtn = document.querySelector(".burger-icon");
let dropDownMenu = document.querySelector("nav ul");

dropDownMenu.onclick = (e) => {
  e.stopPropagation();
};

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  dropDownMenu.classList.toggle("menu-active");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== dropDownMenu) {
    if (toggleBtn.classList.contains("menu-active")) {
      toggleBtn.classList.toggle("menu-active");
      dropDownMenu.classList.toggle("menu-active");
    }
  }
});
