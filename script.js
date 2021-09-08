// brand logo slider using glider


new Glide (".glide", {
    type: "carousel",
    startAt: 0,
    perView: 6,
    // focusAt: "center",
    hoverpause: true,
    autoplay: 2000,
    perTouch: 4,
    dragThreshold: 130,
    animationDuration: 1000,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      768: {
        perView: 3,
      },
      500: {
        perView: 2,
      },
    },
}).mount();


// js toggle items

// var MenuItems = document.getElementById ("MenuItems");
// MenuItems.style.maxHeight = "0px";

// function menutoggle() {
//   if(MenuItems.style.maxHeight == "0px") {
//     MenuItems.style.maxHeight = "200px";
//   }
//   else {
//     MenuItems.style.maxHeight = "0px";
//   }
// }














