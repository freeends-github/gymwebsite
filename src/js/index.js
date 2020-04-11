// Navbar toggler
$(".toggler").on("click", function() {
  $(this).toggleClass("open");
  $("body").toggleClass("navbar-open");
});
$(".nav-links a").on("click", function() {
  if($("body").hasClass("navbar-open")) {
    $(".toggler").removeClass("open");
    $("body").removeClass("navbar-open");
  }
});