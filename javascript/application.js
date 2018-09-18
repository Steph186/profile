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

document.addEventListener("DOMContentLoaded", function() {
  let tabs = document.querySelectorAll(".tab")
    // if (tabs) {
    //   console.log("Checking...")
    //   if (this.scrollY <= 10) {
    //     console.log("I'm high")
    //   removeSelected(tabs);
    // }
  }
})

function removeSelected(tabs) {
  tabs.forEach(function(tab) {
    tab.classList.remove("selected")
  })
}


// document.addEventListener('scroll', function() {
//     if (window.location.pathname+window.location.hash == '/index.erb.html#contact') {
//         console.log('Viewing contact form');
//     }
// });
