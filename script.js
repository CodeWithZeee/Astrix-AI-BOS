// JavaScript for fixed navigation on scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".main-header").addClass("fixed-nav");
  } else {
    $(".main-header").removeClass("fixed-nav");
  }
});

// Toggle navbar on mobile
$(".navbar-toggler").on("click", function () {
  $(this).toggleClass("current");
});
