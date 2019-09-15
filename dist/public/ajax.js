(function($) {
  console.log("jQuery ready  ");
  $(".target")
    .css({ backgroundColor: "#eef", border: "1px solid red" })
    .click(function() {
      $(this)
        .css("background", "#aaf")
        .animate(
          { width: "30px", borderWidth: "30px", marginLeft: "200px" },
          300,
          function() {
            $(this).fadeOut();
          }
        );
    });
  $("#add").on("click", function() {
    $(".target").each(function(i) {
      $(this).append("<span>" + i + "</span>");
    });
  });
})(jQuery);
