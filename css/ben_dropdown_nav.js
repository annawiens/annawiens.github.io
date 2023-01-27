
var menubutton = document.getElementById("menubutton");
menubutton.onmouseup = function() {toggleMenu()};

function toggleMenu() {
	toggleDropdownNav();
	//toggleBannerPad();
}

function toggleDropdownNav() {	
	var dropdownnav = document.getElementById("dropdownnav");

	if (dropdownnav.classList) {
	  dropdownnav.classList.toggle("offscreenTransition");
	} else {
	  // For IE9, toggle dropdownnav offscreenTransition
	  var dropdownClasses = dropdownnav.className.split(" ");
	  var i = dropdownClasses.indexOf("offscreenTransition");
	  if (i >= 0) {
		dropdownClasses.splice(i, 1);
	  } else {
		dropdownClasses.push("offscreenTransition");
		dropdownnav.className = dropdownClasses.join(" ");
	  }
	}
}

function toggleBannerPad() {
	var banner = document.getElementById("banner");

	if (banner.classList) {
	  banner.classList.toggle("adjustPad");
	} else {
	  // For IE9, toggle banner adjustPad
	  var bannerClasses = banner.className.split(" ");
	  var i = bannerClasses.indexOf("adjustPad");
	  if (i >= 0) {
		bannerClasses.splice(i, 1);
	  } else {
		bannerClasses.push("adjustPad");
		banner.className = bannerClasses.join(" ");
	  }
	}	
}


