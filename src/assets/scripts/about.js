import "./modules/skills";
import "./modules/preloader";
import { fullscreenMenu } from "./modules/fullscreen";
var menu = fullscreenMenu();
menu.init();

let btn_down = document.querySelector(".btn-down");
if (btn_down != null) {
  btn_down.addEventListener("click", function(e) {
    e.preventDefault();
    let id = btn_down.getAttribute("href");
    let top = document.querySelector(id).offsetTop;
    window.scrollBy({
      top: top,
      behavior: "smooth"
    });
  });
}
