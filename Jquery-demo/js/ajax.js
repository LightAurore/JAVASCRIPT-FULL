// Asynchronous Javascript And Xml

// jQuery load() Method
/*/ The load() method loads data from a server and puts the returned data into the selected element.
    $(selector).load(URL,data,callback); 
/*/

$(document).ready(function () {
  $("#btn-ajax").click(function () {
    $("#ajax-data").load("../assets/db/proverbe.txt");
    // $("#ajax-data").load("../assets/db/proverbe.txt #p1");
  });
});

/*

    responseTxt - contains the resulting content if the call succeeds
    statusTxt - contains the status of the call
    xhr - contains the XMLHttpRequest object

*/
$(document).ready(function () {
  $("#btn-ajax-2").click(function () {
    $("#ajax-data-2").load(
      "../assets/db/proverbe.txt",
      function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
          alert("External content loaded successfully!");
        if (statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
    );
  });
});

// jQuery - AJAX get() and post() Methods
/*/
    
    GET - Requests data from a specified resource
    POST - Submits data to be processed to a specified resource

/*/

//_________ GET _________
//  $.get(URL,callback);
//  The $.get() method requests data from the server with an HTTP GET request.
$(document).ready(function () {
  $("#btn-ajax-get").click(function () {
    $.get("../assets/db/proverbe.txt", function (data, status) {
      alert("\nStatus: " + status);
      $("#ajax-data-get").append(data);
    });
  });
});

//_________ POST _________
//  $.post(URL,data,callback);
//  The $.post() method requests data from the server using an HTTP POST request.
$(document).ready(function () {
  $("#btn-ajax-post").click(function () {
    $.post(
      "../assets/db/user.json",
      {
        name: "Donald Duck",
        city: "Duckburg",
      },
      function (data, status) {
        $("#ajax-data-get").html(data);
      }
    );
  });
});
