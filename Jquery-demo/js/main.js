// syntaxe
/*
    $(selector).action()

*/
/*

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

*/

// The Document Ready Event
/*

$(document).ready(function(){

  // jQuery methods go here...

});

*/
$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
  $("img").click(function () {
    $(this).hide();
  });
});

// btn event
$(document).ready(function () {
  $("button").click(function () {
    $("code").hide();
  });
});

//  ---
$(document).ready(function () {
  $("#p1").mouseenter(function () {
    // alert("You entered p1!");
  });
});
//  ---
$("div").on("click", function () {
  var color = $(this).css("background-color");
  $("#result").html(
    "That div is <span style='color:" + color + ";'>" + color + "</span>."
  );
});

// let selecteur = document.querySelector("input");

// //  ne fonctionne pas
// selecteur.addEventListener(
//   {
//     click: function () {
//       console.log("clicker");
//       selecteur.style.borderColor = "#881a38";
//     },
//   },
//   {
//     keyup: function () {
//       console.log("key up");
//       selecteur.style.borderColor = "#3d5fb3";
//     },
//   },
//   {
//     mouseenter: function () {
//       console.log("mouse enter");
//       selecteur.style.borderColor = "#3bb23d";
//     },
//   }
// );

//
$(document).ready(function () {
  $("input").on({
    mouseenter: function () {
      $(this).css("border-color", "#3bb23d");
    },
    mouseleave: function () {
      $(this).css("border-color", "#043e38");
    },
    keyup: function () {
      $(this).css({
        color: "#fff",
        backgroundColor: "#3d5fb3",
        border: "4px solid red",
      });
    },
    click: function () {
      $(this).css("background-color", "#b9dfbf");
    },
  });
});
