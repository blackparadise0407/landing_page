var navOpen = false;
$(document).ready(() => {
  var screen_ht = $(window).height();
  var preloader_ht = 5;
  var padding = screen_ht / 5 - preloader_ht;
  $("#preloader").css("padding-top", padding + "px");
  function anim() {
    $("#preloader_image").animate({ left: "1px" }, 2000, function () {
      $("#preloader_image"), animate({ left: "1px" }, 2000);
    });
  }
  anim();
});

function hide_preloader() {
  // To apply Fade Out Effect to the Preloader
  // $("#preloader").fadeOut(1000);
}

const cursor = $(".cursor");
const cursorFollowing = $(".cursorFollowing");

const hover = $(".hover");
const hoverFollowing = $(".hoverFollowing");

const title = $(".title");

// $(document).ready(function () {
//   console.log("READY");
//   $("#wrapper").fullpage({
//     //options here
//     autoScrolling: true,
//     // scrollHorizontally: true,
//   });

//   //methods
//   $.fn.fullpage.setAllowScrolling(false);
// });

$(window).on("mousemove", ({ clientX, clientY }) => {
  gsap.to(cursor, {
    duration: 0.2,
    x: clientX - cursor.width() / 2,
    y: clientY - cursor.height() / 2,
  });
  gsap.to(cursorFollowing, {
    duration: 0.3,
    x: clientX - cursorFollowing.width() / 2,
    y: clientY - cursorFollowing.height() / 2,
  });
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 60) $("nav").addClass("fixed");
//   else $("nav").removeClass("fixed");
// });

hover.on("mouseenter", () => {
  cursor.addClass("active");
  cursorFollowing.addClass("active");
  console.log("mouseenter");
});

hover.on("mouseleave", () => {
  cursor.removeClass("active");
  cursorFollowing.removeClass("active");
  console.log("mouseleave");
});

hoverFollowing.each(function () {
  $(this).on("mousemove", ({ offsetX, offsetY }) => {
    let perX = offsetX / 10;
    let perY = offsetY / 10;
    $(this).css({
      transform: `translate(${perX}px, ${perY}px)`,
    });
  });

  $(this).on("mouseleave", () => {
    $(this).css("transform", `translate(0,0)`);
  });
});

$(".burgur").on("click", () => {
  navOpen = !navOpen;
  navOpen ? $("nav").addClass("open") : $("nav").removeClass("open");
});

// $(".burgur").on("click", () => {
//   console.log("click burgur");
//   $("nav").removeClass("open");
// });
