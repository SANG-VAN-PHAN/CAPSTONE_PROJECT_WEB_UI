// Nav open close
const body = document.querySelector("body"),
  nav = document.querySelector("header"),
  modeToggle = document.querySelector(".dark-light");

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
});

// Navbar fixed
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("nav-fixed");
  } else {
    document.querySelector("header").classList.remove("nav-fixed");
  }
});
//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
  $(".header").toggleClass("active");
});

//  Navbar Change Active Class Link
// $(".header .navbar-nav li").click(function () {
//   $(".active").toggleClass("active");
//   $(this).toggleClass("active");
// });

// function handleChangeTab(e) {
//   var activeList = document.querySelectorAll(".nav-link");

//   for (var i = 0; i < activeList.length; i++) {
//     if (activeList[i].classList.contains("active") === true) {
//       activeList[i].classList.remove("active");
//     }
//   }
//   // 2. gắn active vào nút vừa mới nhấn
//   e.target.classList.add("active"); // e.target là thẻ vừa nhấn
// }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("noscroll");
  });
});


