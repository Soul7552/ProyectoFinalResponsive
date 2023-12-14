const menuLinks = document.querySelector("#menu-links");
const checkbox = document.querySelector("#check");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    menuLinks.style.maxHeight = "180px";
  } else {
    menuLinks.style.maxHeight = "0px";
  }
});