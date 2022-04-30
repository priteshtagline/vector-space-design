// if ($("#fullpage").length > 0) {
//   var myFullpage = new fullpage("#fullpage", {
//     anchors: ["content1", "content2", "content3", "content4", "content5", "content6"],
//     menu: "#menu",
//     navigation: false,
//     navigationTooltips: ["First page", "Second page", "Third and last page"],
//     responsiveWidth: 900,
//     afterResponsive: function (isResponsive) {},
//   });
// }

$(".background_bg").each(function () {
  var attr = $(this).attr("data-img-src");
  if (typeof attr !== typeof undefined && attr !== false) {
    $(this).css("background", "url(" + attr + ") center center/cover");
  }
});
