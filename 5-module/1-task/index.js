function hideSelf() {
  // ваш код...
  let hideButton = document.querySelector(".hide-self-button");
  hideButton.onclick = function() {
    this.hidden = true;
  };
}
