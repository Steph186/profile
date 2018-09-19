// document.addEventListener("DOMContentLoaded", function() {
//   let navbar = document.querySelector('.nav');
//   if (navbar) {
//     navbar.style.transition = "all 0.3s";
//     if (window.innerWidth >= 50) {
//       window.addEventListener('scroll', () => {
//         if (window.scrollY >= 50) {
//           navbar.style.backgroundColor = '#45608d';
//         } else {
//           navbar.style.backgroundColor = 'transparent';
//         }

//       })

//     }
//   }
// });


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
  if (window.innerWidth >= 768) {
    let tabs = document.querySelectorAll(".tab")
    if (tabs) {
      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          removeSelected(tabs);
          tab.classList.add("selected");
        })
      })
    }
  }
})



function removeSelected(tabs) {
  tabs.forEach(function(tab) {
    tab.classList.remove("selected")
  })
}

// SCROLL changes URL and selected tab in green WITHOUT jumps on the page.
document.addEventListener("DOMContentLoaded", function() {
let anchors = document.querySelectorAll('section');
let tabs = document.querySelectorAll(".tab")
window.addEventListener("scroll", function() {
  anchors.forEach(function(anchor){
    if ((location.hash.substring(1) != anchor.classList.value) && (isScrolledIntoView(anchor) == true)) {
      let href = anchor.classList.value;
      location.hash = '/' + href.slice(href.indexOf('#') + 1);
      tabs.forEach(function(tab) {
        console.log(tab.hash.substring(1));
        console.log(href);
        if (tab.hash.substring(1) == href) {
          console.log("true")
          tab.classList.add("selected");
        } else {
          tab.classList.remove("selected");
        }
      })
    }

  if (window.scrollY < 10) {
    removeSelected(tabs);
  }

  })
  });
})

function isScrolledIntoView(elem) {
  // highest visible point
  let topDoc = window.scrollY;
  let topElem = elem.offsetTop;
  let downElem = topElem + elem.offsetHeight;
  return ((topElem <= topDoc) && (downElem - topDoc >= 5));
}
