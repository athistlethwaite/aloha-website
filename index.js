$(function() {
  // Smooth Scrolling Source: https://css-tricks.com/smooth-scrolling-accessibility/

  $('.main-navigation a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });

  $(".main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    percentPosition: false,
    imagedLoaded: true,
    // autoPlay: true,
    speed: 400,
    prevNextButtons: false
  });
});

$(function() {
  $(".sign-up-form button").click(function(event) {
    event.preventDefault();
    if ($("#your-email").val() == "") {
      alert("Please enter a valid e-mail address.");
    } else {
      alert("Thank you for subscribing!");
    }
  });
});

$(function() {
  var cartItems = 0;
  $(".featured").on("click", "button", function(event) {
    event.preventDefault();
    cartItems++;
    $(".cart-items")
      .text(cartItems)
      .show();
  });
});
