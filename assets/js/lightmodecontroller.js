var logofour = document.getElementById("four");
var logoseven = document.getElementById("seven");
var linkedinLogos = document.querySelectorAll(".linkedinLogo");
var siteLogo = document.getElementById("siteLogo");
var mSiteLogo = document.getElementById("msiteLogo");

// Set interval for checking
window.setInterval(function () {
  var date = new Date(); // Create a Date object to find out what time it is

  //Calling the function to switch the linked in icon
  iconSwitch();

  if (date.getHours() >= 11) {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  } else if (date.getHours() < 11) {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  }
}, 0);

function logoSwitch() {
  if (document.body.classList.contains("lightMode")) {
    siteLogo.src = "assets/neurava.png";
    mobileSiteLogo.src = "assets/neurava.png";
    logofour.src = "assets/logos/4-light.png";
    logoseven.src = "assets/logos/7-light.png";
  } else {
    mobileSiteLogo.src = "assets/neurava-alt.png";
    siteLogo.src = "assets/neurava-alt.png";
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
