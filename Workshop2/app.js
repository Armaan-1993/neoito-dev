// Hamburger Menu

function myFunction() {
  var x = document.getElementById("myLinks");
  let y = document.getElementById("openimg");
  let z = document.getElementById("closeimg");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block"
    z.style.display = "none"

  } else {
    x.style.display = "block";
    y.style.display = "none"
    z.style.display = "block"
  }
} 


// let x = document.getElementById("myLinks");
// let y = document.getElementById("openimg");
// let z = document.getElementById("closeimg");
// document.getElementById("openimg").addEventListener("click", openFunction)
// document.getElementById("closeimg").addEventListener("click", closeFunction)

// function openFunction (e) {
//   if(x.style.display === "none") {
//     y.style.display = "block";
//     z.style.display = "none"
//   } else {
//     x.style.display = "block"
//     y.style.display = "none";
//     z.style.display = "block"
//   }
// e.preventDefault();
// }


// Carousel

$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});






