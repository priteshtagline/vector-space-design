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
    afterRender: function () {
      if (window.innerWidth > 768) {
        setInterval(function () {
          fullpage_api.moveSectionDown();
        }, 6000);
      } else {
        setInterval(function () {
          fullpage_api.moveSectionDown();
        }, 12000);
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
