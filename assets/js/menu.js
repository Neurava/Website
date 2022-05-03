var menu = document.getElementById("mobileMenu");
var menuIconOpen = document.getElementById("open");
var menuIconClose = document.getElementById("close");
var siteLogo = document.getElementById("siteLogo");
var mSiteLogo = document.getElementById("msiteLogo");
var header = document.getElementById("header");
var navText = document.getElementById("navText");

function toggleMenu() {
  menu.classList.toggle("active");
  menuIconOpen.classList.toggle("active");
  menuIconClose.classList.toggle("active");
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    siteLogo.style.width = "200px";
    header.style.background = "#285aff";
    header.classList.add("blur");
    siteLogo.src = "assets/neurava-white.png";
    mSiteLogo.src = "assets/neurava-white.png";
    navText.classList.remove("light");
  } else {
    siteLogo.style.width = "500px";
    header.style.background = "transparent";
    header.classList.remove("blur");
    if (document.body.classList.contains("lightMode")) {
      siteLogo.src = "assets/neurava.png";
      mSiteLogo.src = "assets/neurava.png";
    } else {
      siteLogo.src = "assets/neurava-alt.png";
      mSiteLogo.src = "assets/neurava-alt.png";
    }
    navText.classList.add("light");
  }
}
