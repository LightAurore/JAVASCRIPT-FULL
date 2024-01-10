
  // __________  HTML()  _____________
  $("#btn2").click(function () {
    $("#test2").html(function (i, origText) {
      return (
        "Old html: " +
        origText +
        " New html: Hello <b>world!</b> (index: " +
        i +
        ")"
      );
    });
  });

$(document).ready(function () {
  $("#btn1").click(function () {
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function () {
    $("#test2").html("<b>Hello world!</b>");
  });
  // __________  VAL()  _____________
  $("#btn3").click(function () {
    $("#test3").val("Dolly Duck");
  });
});
// __________  ATTR()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("#w3s").attr({
      href: "https://www.w3schools.com/jquery/",
      title: "W3Schools jQuery Tutorial",
    });
  });
});
$(document).ready(function () {
  $("button").click(function () {
    $("#w3s").attr("href", function (i, origValue) {
      return origValue + "/jquery/";
    });
  });
});

/*/

    append() - Inserts content at the end of the selected elements
    prepend() - Inserts content at the beginning of the selected elements
    after() - Inserts content after the selected elements
    before() - Inserts content before the selected elements

/*/
// __________  APPEND()  _____________
$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function () {
    $("ol").append("<li>Appended item</li>");
  });
});
// __________  PREPEND()  _____________
$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").prepend("<b>Prepended text</b>. ");
  });
  $("#btn2").click(function () {
    $("ol").prepend("<li>Prepended item</li>");
  });
});

function appendText() {
  var txt1 = "<p>Text!</p>"; // Create text with HTML
  var txt2 = $("<p></p>").text("Text."); // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text?"; // Create text with DOM
  $("body").append(txt1, txt2, txt3); // Append new elements
}

$(document).ready(function () {
  // __________  BEFORE()  _____________
  $("#btn1").click(function () {
    $("img").before("<b>Before</b>");
  });
  // __________  AFTER()  _____________
  $("#btn2").click(function () {
    $("img").after("<i>After</i>");
  });
});

/*/

    remove() - Removes the selected element (and its child elements)
    empty() - Removes the child elements from the selected element

/*/
// __________  REMOVE()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("#div1").remove();
  });
});
// __________  EMPTY()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("#div1").empty();
  });
});

// Get and Set CSS Classes
/*/     jQuery Manipulating CSS

    addClass() - Adds one or more classes to the selected elements
    removeClass() - Removes one or more classes from the selected elements
    toggleClass() - Toggles between adding/removing classes from the selected elements
    css() - Sets or returns the style attribute

/*/
// __________  ADDCLASSD()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important BLUE");
  });
});
// __________  REMOVECLASS()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("h1, h2, p").removeClass("blue");
  });
});
// __________  TOGGLECLASS()  _____________
$(document).ready(function () {
  $("button").click(function () {
    $("h1, h2, p").toggleClass("blue");
  });
});
// __________  CSS()  _____________
// Return a CSS Property
// css("propertyname");
$("p").css("background-color");
// Set a CSS Property
// css("propertyname","value");
// css({"propertyname":"value","propertyname":"value",...});
$(document).ready(function () {
  $("button").click(function () {
    $("p").css({ "background-color": "yellow", "font-size": "200%" });
  });
});

// jQuery Dimension Methods
/*/
    
    width() + item
    height()    + item
    innerWidth()    + padding
    innerHeight()   + padding
    outerWidth()    + border
    outerHeight()   + border
    The outerWidth(true) method returns the width of an element (includes padding, border, and margin).
The outerHeight(true) method returns the height of an element (includes padding, border, and margin).
/*/
//  GET
$(document).ready(function(){
    $("button").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div1").width() + "</br>";
      txt += "Height of div: " + $("#div1").height();
      $("#div1").html(txt);
    });
});

$("button").click(function(){
    var txt = "";
    txt += "Outer width (+margin): " + $("#div1").outerWidth(true) + "</br>";
    txt += "Outer height (+margin): " + $("#div1").outerHeight(true);
    $("#div1").html(txt);
}); 

