// jQuery parent() Method
/*/
    The parent() method returns the direct parent element of the selected element.
    The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
    The parentsUntil() method returns all ancestor elements between two given arguments.

/*/
//  _______ PARENT()   _________
$(document).ready(function () {
  $("span").parent().css({ color: "red", border: "2px solid red" });
});
//  _______ PARENTS()   _________
$(document).ready(function () {
  $("span").parents().css({ color: "red", border: "2px solid red" });
});
$(document).ready(function () {
  $("span").parents("ul").css({ color: "red", border: "2px solid red" });
});
//   _________ PARENTUNTIL() _________

//  jQuery children() Method
/*/
  The children() method returns all direct children of the selected element.
  The find() method returns descendant elements of the selected element, all the way down to the last descendant.
/*/
//   _________  CHILDREN()  _________
$(document).ready(function () {
  $("div").children().css({ color: "red", border: "2px solid red" });
});
$(document).ready(function () {
  $("div").children("p.first").css({ color: "red", border: "2px solid red" });
});
//  _________   FIND()  _________
$(document).ready(function () {
  $("div").find("span").css({ color: "red", border: "2px solid red" });
});
$(document).ready(function () {
  $("div").find("*").css({ color: "red", border: "2px solid red" });
});

//  jQuery siblings() Method
/*/

    siblings()
    next()
    nextAll()
    nextUntil()
    prev()
    prevAll()
    prevUntil()

    The siblings() method returns all sibling elements of the selected element.
    The next() method returns the next sibling element of the selected element.
    The nextAll() method returns all next sibling elements of the selected element.
    The nextUntil() method returns all next sibling elements between two given arguments.
/*/
//  _________   SIBLINGS    _________
$(document).ready(function () {
  $("h2").siblings().css({ color: "red", border: "2px solid red" });
});
$(document).ready(function () {
  $("h2").siblings("p").css({ color: "red", border: "2px solid red" });
});
//  _________   NEXT()  _________
$(document).ready(function () {
  $("h2").next().css({ color: "red", border: "2px solid red" });
});
//  _________ NEXTALL() _________
$(document).ready(function () {
  $("h2").nextAll().css({ color: "red", border: "2px solid red" });
});
//  _________   NEXTUNTIL() _________
$(document).ready(function () {
  $("h2").nextUntil("h6").css({ color: "red", border: "2px solid red" });
});

//  jQuery Traversing - Filtering
/*/
first(), last() and eq(),
    The first() method returns the first element of the specified elements.
    The last() method returns the last element of the specified elements.
    The eq() method returns an element with a specific index number of the selected elements.
    The filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
    The not() method returns all elements that do not match the criteria.

/*/
//  _________   FIRST() _________
$(document).ready(function () {
  $("div").first().css("background-color", "yellow");
});
//  _________   LAST()  _________
$(document).ready(function () {
  $("div").first().css("background-color", "yellow");
});
//  _________   FILTER()  _________
$(document).ready(function () {
  $("div").filter(".intro").css("background-color", "yellow");
});
//  _________   EQ()  _________
$(document).ready(function () {
  $("div").eq(1).css("background-color", "yellow");
});
//  _________   NOT()  _________
$(document).ready(function () {
  $("div").not(".intro").css("background-color", "yellow");
});




