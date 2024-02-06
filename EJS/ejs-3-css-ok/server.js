const express = require("express"),
  app = express();

const path = require("path");
// const ejs = require("ejs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

// implémenter du css
// express.static(root, [options])
app.use(express.static("views", { "Content-Type": "text/css" }));

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route for index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

//route for magic page
app.get("/magic", function (req, res) {
  var characters = [
    {
      name: "Harry",
      designation: "Student",
    },
    {
      name: "Dumbledore",
      designation: "Headmaster",
    },
    {
      name: "Snape",
      designation: "Professor",
    },
    {
      name: "Hermione",
      designation: "Student",
    },
  ];
  var subheading = "I though we should involve some magic";
  // console.log(subheading);
  res.render("pages/magic", {
    characters: characters,
    subheading: subheading,
  });
});

app.listen(8080, function () {
  console.log("Server is running on port http://localhost:" + 8080);
});
