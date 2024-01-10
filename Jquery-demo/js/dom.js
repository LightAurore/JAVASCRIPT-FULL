


// DOM
/*/ SET
text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields
/*/
$(document).ready(function () {
    // __________  TEXT()  _____________
    $("#btn1").click(function () {
      alert("Text: " + $("#test").text());
    });
    // __________  HTML()  _____________
    $("#btn2").click(function () {
      alert("HTML: " + $("#test").html());
    });
  });
  // __________  VAL()  _____________
  $(document).ready(function () {
    $("button").click(function () {
      alert("Value: " + $("#test").val());
    });
  });
  
  // __________  ATTR()  _____________
  // The jQuery attr() method is used to get attribute values.
  $(document).ready(function () {
    $("button").click(function () {
      alert($("#w3s").attr("href"));
    });
  });
  
  //  _______ SET  ________
  /*/     Set Content - text(), html(), and val()
  
      text("...") - Sets or returns the text content of selected elements
      html(`...`) - Sets or returns the content of selected elements (including HTML markup)
      val(var.value) - Sets or returns the value of form fields
  /*/
  // __________  TEXT()  _____________
  $(document).ready(function () {
    $("#btn1").click(function () {
      $("#test1").text(function (i, origText) {
        return (
          "Old text: " + origText + " New text: Hello world! (index: " + i + ")"
        );
      });
    });
  })
  