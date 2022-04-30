if ($(".main-page-slider").length > 0) {
  $(".main-page-slider").slick({
    dots: true,
    infinite: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
  });
  // const slider = $(".main-page-slider");

  // slider.on("wheel", function (e) {
  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick("slickPrev");
  //   } else {
  //     e.preventDefault();
  //     $(this).slick("slickNext");
  //   }
  // });
}

$(".background_bg").each(function () {
  var attr = $(this).attr("data-img-src");
  if (typeof attr !== typeof undefined && attr !== false) {
    $(this).css("background", "url(" + attr + ") center center/cover");
  }
});
