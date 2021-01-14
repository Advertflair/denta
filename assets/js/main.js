// Open Dental Slider
let dentSwiper = new Swiper(".open-dental-overall", {
  pagination: {
    el: ".open-dental-overall .swiper-pagination",
    clickable: true,
  },
});

// Animate on Scroll
AOS.init({
  once: true,
});

// Burger Menus
let menu = document.querySelector(".menu-lines");
let menuSec = document.querySelector(".overall-menus");
let overlay = document.querySelector(".overlay");
function burgerMenus(e) {
  e.target.classList.toggle("menu-active");
  if (e.target.classList.contains("menu-active")) {
    menuSec.classList.add("slide-in");
    overlay.classList.add("d-block");
    document.body.style.overflow = "hidden";
  } else {
    menuSec.classList.remove("slide-in");
    overlay.classList.remove("d-block");
    document.body.style.overflow = "";
  }
}
menu.addEventListener("click", burgerMenus);

// Header Scroll
let navigations = document.querySelector("nav");
function fixedHeader(e) {
  if (scrollY > 80) {
    navigations.classList.add("fix-active");
  } else {
    navigations.classList.remove("fix-active");
  }
}
window.addEventListener("scroll", fixedHeader);

// Talk, Speak, Dictate Slider
let listItem = document.querySelectorAll(".tab-items li");
let listItemActive = document.querySelector(".tab-items li.active");
let dash = document.querySelector(".dash");

function setWidth(element) {
  dash.style.width = element.clientWidth + "px";
  dash.style.left = element.offsetLeft + "px";
}
let tabSlider = new Swiper(".tab-slider", {
  speed: 800,
  slidesPerView: 1,
  allowTouchMove: false,

  // mousewheel: true,
  // autoScrollOffset: 2,
  // initialSlide: 1,

  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});
// let tabAccord = new Swiper(".accordion-sec .tab-slider", {});
tabSlider.on("slideChange", function (innerMethods) {
  RemoveActive();
  let currentElement = listItem[innerMethods.activeIndex];
  currentElement.classList.add("active");
  setWidth(currentElement);
});

let allSwipersTab = document.querySelectorAll(".swiper-slide");
// Active Setters
setWidth(listItemActive);

function selectItem(e, index) {
  RemoveActive();
  e.target.classList.add("active");
  tabSlider.slideTo(index);
  setWidth(e.target);
}
// Remove Active
function RemoveActive() {
  listItem.forEach((item) => {
    item.classList.remove("active");
  });
}
listItem.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    selectItem(e, index);
  });
});

// Tab Slider Fix
// let tbSlider = document.querySelector(".section-3 .tab-slider");
// let sliderFix = tbSlider.offsetTop;
// window.addEventListener("scroll", () => {
//   if (tbSlider.classList.contains("aos-animate")) {
//     setTimeout(() => {
//       tbSlider.classList.add("action-play");
//     }, 3000);
//   }
// });

// Accordion
let accordionTab = $(".accordion .accordion-title");
accordionTab.each(function (index, ele) {
  $(ele).click(function (e) {
    $(ele).toggleClass("active");
    $(ele).parent().find(".accordion-copy").slideToggle();
    console.log($(ele).parent().find(".accordion-copy"));
    if ($(ele).hasClass("active")) {
      $(ele).parent().find("img").attr("src", "./assets/images/minus.svg");
    } else {
      $(ele).parent().find("img").attr("src", "./assets/images/add.svg");
    }
  });
});

// Video
