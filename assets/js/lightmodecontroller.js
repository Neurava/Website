var logofour = document.getElementById("four");
var logoseven = document.getElementById("seven");
var linkedinLogos = document.querySelectorAll(".linkedinLogo");
var siteLogo = document.getElementById("siteLogo");

// Set interval for checking
window.setInterval(function () {
  var date = new Date(); // Create a Date object to find out what time it is
  iconSwitch();
  if (date.getHours() >= 18) {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  } else if (date.getHours() < 18) {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  }
}, 0);

function logoSwitch() {
  if (document.body.classList.contains("lightMode")) {
    siteLogo.src = "assets/neurava.png";
    logofour.src = "assets/logos/4-light.png";
    logoseven.src = "assets/logos/7-light.png";
  } else {
    logofour.src = "assets/logos/4.png";
    logoseven.src = "assets/logos/7.png";
  }
}

function iconSwitch() {
  if (document.body.classList.contains("lightMode")) {
    for (let i = 0; i < linkedinLogos.length; i++) {
      linkedinLogos[i].src = "/assets/icons/linkedin-logo-blue.png";
    }
  } else {
    for (let i = 0; i < linkedinLogos.length; i++) {
      linkedinLogos[i].src = "/assets/icons/linkedin-logo.png";
    }
  }
}

window.onload = function () {
  logoSwitch();
};
