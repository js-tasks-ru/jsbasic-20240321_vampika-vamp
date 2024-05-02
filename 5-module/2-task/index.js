function toggleText() {
  // ваш код...
  let toggleButton = document.querySelector(".toggle-text-button");
  toggleButton.onclick = function () {
    let elem = document.querySelector("#text");
    elem.hidden = !elem.hidden;
  }
}
