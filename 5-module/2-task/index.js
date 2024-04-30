function toggleText() {
  // ваш код...
  let toggleButton = document.querySelector(".toggle-text-button");
  toggleButton.onclick = function () {
    let elem = document.querySelector("#text");
    if(elem.hidden)
      elem.hidden = false;
    else
      elem.hidden = true;
  }
}
