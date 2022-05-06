// Add active in menu JQuery

jQuery(function ($) {
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $(".navbar-nav li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "") {
      $(this).addClass("active");
      if ($(this).hasClass("active")) {
        $(this).parent().parent(".dropdown").children(".dropdown-toggle").addClass("active");
      }
    }
  });
});

// Home page slider
if ($("#fullpage").length > 0) {
  var myFullpage = new fullpage("#fullpage", {
    anchors: ["driving-discovery", "the-challange", "the-solution", "the-purpose", "our-technology", "scintific-collaborators", "footer"],
    menu: "#menu",
    navigation: false,
    responsiveWidth: 900,
    loopBottom: false,
    licenseKey: "",
    afterResponsive: function (isResponsive) {},
    afterLoad: function () {
      if ($("footer.fp-section").hasClass("active")) {
        $(".fp-dots").addClass("fp-dots-overwrap");
      } else {
        $(".fp-dots").removeClass("fp-dots-overwrap");
      }
    },
  });
}

// Inline image src generate
$(".background_bg").each(function () {
  var attr = $(this).attr("data-img-src");
  if (typeof attr !== typeof undefined && attr !== false) {
    $(this).css("background", "url(" + attr + ") center center/cover");
  }
});

// Navbar toggle JQuery
if (window.innerWidth < 992) {
  $(".sidebar-toggle").on("click", function () {
    if ($(".navbar-collapse").hasClass("show")) {
      setTimeout(function () {
        $("body").removeClass("background-blur");
      }, 0);
    } else {
      setTimeout(function () {
        $("body").addClass("background-blur");
      }, 300);
    }
    $(this).toggleClass("open");
  });
}

// Our technology page slider

if ($("#OurTechnologySlider").length > 0) {
  $("#OurTechnologySlider").slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
  });
}

// Open nav dropdown on hover

if (window.innerWidth > 767) {
  $(".dropdown").hover(function () {
    $(".dropdown-toggle").dropdown("toggle");
  });
}
