//  _____ Methodes  _____
/* 
    $(selector).hide(speed,callback);
    $(selector).show(speed,callback); 
*/
// show(speed,callback)
$("p").show();
// hide(speed,callback)
$("p").hide();

$(document).ready(function () {
  $("input").click(function () {
    $("div").show(2000, function () {
      $("p").css({
        width: "calc(20rem * 1.618)",
        minHeight: "20rem",
        padding: "6px",
        backgroundColor: "#881a38",
        color: "#ffffff",
      });
    });
  });
});

//toggle(speed,callback)
$("p").toggle();

// fadeIn(speed,callback)
// fadeOut(speed,callback)
// $(selector).fadeToggle(speed,callback);
$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});

// $(selector).fadeTo(speed,opacity,callback);
$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
});

//   $(selector).slideDown(speed,callback);
//   $(selector).slideUp(speed,callback);
//   $(selector).slideToggle(speed,callback);
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });
});

//   $(selector).animate({params},speed,callback);
// The required params parameter defines the CSS properties to be animated
// "slow", "fast" or milliseconds
// callback
$("button").click(function () {
  $("div").animate({
    left: "250px",
    height: "+=150px",
    width: "+=150px",
  });
});
// __________  ANIMATE()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("div").animate({
      height: "toggle",
    });
  });
});

// ___________  STOP  ______________
// $(selector).stop(stopAll,goToEnd);
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function () {
    $("#panel").stop();
  });
});

// __________  CSS()  _____________
// jQuery Method Chaining
$(document).ready(function () {
  $("button").click(function () {
    $("#p1").css("color", "green").slideUp(2000).slideDown(2000);
  });
});
