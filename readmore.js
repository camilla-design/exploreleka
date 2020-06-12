function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Les mer"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Les mindre"; 
      moreText.style.display = "inline";
    }
  }

  function newButton() {
      var dotsTwo = document.getElementById("dotsTwo");
      var moreTextTwo = document.getElementById("moreTwo");
      var myBtnTwo = document.getElementById("myBtnTwo");

      if(dotsTwo.style.display === "none") {
          dotsTwo.style.display = "inline";
          myBtnTwo.innerHTML = "Les mer";
          moreTextTwo.style.display = "none";
      } else {
          dotsTwo.style.display = "none";
          myBtnTwo.innerHTML = "Les mindre";
          moreTextTwo.style.display = "inline";
      }
  }

  function newButtonThree() {
    var dotsThree = document.getElementById("dotsThree");
    var moreTextThree = document.getElementById("moreThree");
    var myBtnThree = document.getElementById("myBtnThree");

    if(dotsThree.style.display === "none") {
        dotsThree.style.display = "inline";
        myBtnThree.innerHTML = "Les mer";
        moreTextThree.style.display = "none";
    } else {
        dotsThree.style.display = "none";
        myBtnThree.innerHTML = "Les mindre";
        moreTextThree.style.display = "inline";
    }
  }