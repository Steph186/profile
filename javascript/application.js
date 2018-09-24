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
