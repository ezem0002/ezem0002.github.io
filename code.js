
// Keydown event listener for escape key

document.onkeydown = function (event) {
  if(event.keyCode == 13) {
    $(this).click();
  }
  
  else if(event.keyCode == 27) {
    $(this).closeAll;
  }
}
