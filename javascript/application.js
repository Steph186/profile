document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.nav');
  if (navbar) {

    let hamburgerMenu = document.querySelector(".hamburger-container")
    let menu = document.querySelector("#menu")
    let flexbox = document.querySelector("#navbar-elements")
    let logo = document.querySelector("#sc-logo")

    let topBar = document.querySelector(".hamburger li:nth-child(1)");
    let middleBar = document.querySelector(".hamburger li:nth-child(2)");
    let bottomBar = document.querySelector(".hamburger li:nth-child(3)");

    let tabs = document.querySelectorAll(".tab");

    // hamburger is displayed only on phones.
    // when clicked, change it to cross
    hamburgerMenu.addEventListener('click', function() {
      if (middleBar.classList.contains("rot-45deg") === true) {
        topBar.classList.remove("rot45deg");
        middleBar.classList.remove("rot-45deg");
        bottomBar.classList.remove("hidden");
      } else {
        bottomBar.classList.add("hidden");
        topBar.classList.add("rot45deg");
        middleBar.classList.add("rot-45deg");
      }

      // and display/hide menu on click
      if (menu.style.display === "block") {
        menu.style.display = "none";
        flexbox.style.display = "flex";
        flexbox.style.justifyContent = "space-between";
        flexbox.style.alignItems = "center";
        logo.style.display = "block";
      } else {
        menu.style.display = "block";
        flexbox.style.display = "block";
        flexbox.style.justifyContent = "none";
        flexbox.style.alignItems = "none";
        logo.style.display = "none";
      }
    });

    // on phones, when click on a tab -> close the navbar.
  }
})

document.addEventListener("DOMContentLoaded", function() {
  // on desktop, at least 768 wide
  if (window.innerWidth >= 768) {
    let tabs = document.querySelectorAll(".tab")
    if (tabs) {
      // change color of tabs in green when clicked
      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          removeSelected(tabs);
          tab.classList.add("selected");
        })
      })
    }
  }
})

// takes all tabs and remove all selected attributes.
function removeSelected(tabs) {
  tabs.forEach(function(tab) {
    tab.classList.remove("selected")
  })
}

// SCROLL changes URL and selected tab in green WITHOUT jumps on the page.
document.addEventListener("DOMContentLoaded", function() {
let anchors = document.querySelectorAll('section');
let tabs = document.querySelectorAll(".tab");
let body = document.querySelector("body");
// on scroll,
window.addEventListener("scroll", function() {
  anchors.forEach(function(anchor){
    // check if new anchor become visible in the screen (does not listen the current anchor)
    if ((location.hash.substring(1) != anchor.classList.value) && (isScrolledIntoView(anchor) == true)) {
      // change url without mofying scroll of page
      let href = anchor.classList.value;
      location.hash = '/' + href.slice(href.indexOf('#') + 1);
      // and change color of current tab on navbar
      tabs.forEach(function(tab) {
        if (tab.hash.substring(1) == href) {
          tab.classList.add("selected");
        } else {
          tab.classList.remove("selected");
        }
      })
    }

    if (window.scrollY + window.innerHeight > body.scrollHeight - 100) {
      removeSelected(tabs);
      tabs[4].classList.add("selected")
     }
    })
  });
})

// is the element currently visible in the screen?
function isScrolledIntoView(elem) {
  // highest visible point
  let topDoc = window.scrollY;
  let topElem = elem.offsetTop;
  let downElem = topElem + elem.offsetHeight;
  return ((topElem <= topDoc) && (downElem - topDoc >= 5));
}

document.addEventListener("DOMContentLoaded", function() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {needSticky()};

  // Get the navbar
  var navbar = document.querySelector(".nav");
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  let placeholder = document.querySelector(".navbar-placeholder")

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function needSticky() {
    // on large devices, navbar should stick 60px under top.
    if (window.innerWidth >= 750 && window.pageYOffset >= sticky - 60) {
      navbar.classList.add("sticky");
      placeholder.style.display = "block";
    // on smaller devices, navbar should be sticky on top
    } else if (window.innerWidth < 750 && window.pageYOffset >= sticky + 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      placeholder.style.display = "none";
    }
  }
})

document.addEventListener("DOMContentLoaded", function() {
  let master = document.querySelector("#showMaster");
  let conferences = document.querySelector("#showConf");
  let prize = document.querySelector("#showPrize");
  let coursera = document.querySelector("#showCoursera");

  if (window.innerWidth >= 750) {
    let infoMaster = document.querySelector("#infoMaster");
    let infoConferences = document.querySelector("#infoConf");
    let infoPrize = document.querySelector("#infoPrize");
    let infoCoursera = document.querySelector("#infoCoursera");

    infoCoursera.style.display = "none";

    [master, conferences, prize, coursera].forEach(function(show) {
      console.log("show is");
      console.log(show);
      show.addEventListener('click', function() {
        index = [master, conferences, prize, coursera].indexOf(show);
        toggleElement([infoMaster, infoConferences, infoPrize, infoCoursera][index], show);
      })
    })



    // master.addEventListener('click', function() {
    //   toggleElement(infoMaster, master);
    // })

    // conferences.addEventListener('click', function() {
    //   toggleElement(infoConferences, conferences);
    // })

    // prize.addEventListener('click', function() {
    //   toggleElement(infoPrize, prize);
    // })

    // coursera.addEventListener('click', function() {
    //   toggleElement(infoCoursera, coursera);
    // })


    function toggleElement(element, icon) {
      console.log(element);
      if (element.style.display === "none") {
        element.style.display = "block";
        icon.classList.remove("fa-chevron-circle-down");
        icon.classList.add("fa-chevron-circle-up");
      } else {
        element.style.display = "none";
        icon.classList.remove("fa-chevron-circle-up");
        icon.classList.add("fa-chevron-circle-down");
        console.log(icon);
      }
    }
  } else {
    // master.style.display = "none";
    // conferences.style.display = "none";
    // prize.style.display = "none";
  }
})
