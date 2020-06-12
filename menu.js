function burgerMenu() {
    var burgerMenuLink = document.getElementById("navigationLinks"); // use const, not var, this value will never change so that is fine to use const, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
    if(burgerMenuLink.style.display === "block") {
      burgerMenuLink.style.display = "none";
    } else {
      burgerMenuLink.style.display = "block";
    }
  }