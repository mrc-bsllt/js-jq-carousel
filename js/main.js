$(document).ready(
  function() {

    var prevAngle = $(".prev");
    var nextAngle = $(".next");

    prevAngle.click(
      function() {

        prevImage();

      }
    );

    nextAngle.click(
      function() {

        nextImage();

      }
    );

  }
);

// FUNCTION -------------------------------------------
function nextImage () {

  var imageWithActive = $("img.active");
  var circleWithActive = $("i.active");

  imageWithActive.removeClass("active");
  circleWithActive.removeClass("active");

  if (imageWithActive.hasClass("last")) {
    $(".images img:first-child").addClass("active");
    $(".nav i:first-child").addClass("active");
  } else {
    imageWithActive.next().addClass("active");
    circleWithActive.next().addClass("active");
  }

}

function prevImage () {

  var imageWithActive = $("img.active");
  var circleWithActive = $("i.active");

  imageWithActive.removeClass("active");
  circleWithActive.removeClass("active");

  if (imageWithActive.hasClass("first")) {
    $(".images img:last-child").addClass("active");
    $(".nav i:last-child").addClass("active");
  } else {
    imageWithActive.prev().addClass("active");
    circleWithActive.prev().addClass("active");
  }

}
// FUNCTION -------------------------------------------
