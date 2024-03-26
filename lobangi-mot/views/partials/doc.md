#
app.set("views", "path/to/views").

##
var path = require('path');


  // Set the default templating engine to ejs
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // The views/index.ejs exists in the app directory
  app.get('/hello', function (req, res) {
    res.render('index', {title: 'title'});
  });

{
    var path = require('path');
var EJS  = require('ejs');

app.engine('html', EJS.renderFile);

// Set the default templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// The views/index.html exists in the app directory
app.get('/hello', function (req, res) {
  res.render('index.html', {title: 'title'});
});
}

##
<%- include myview.ejs %>
<%- include('../partials/header.ejs',{paramName: paramValue}) %>
###

<%- include('../partials/_head.ejs',{title: paramValue}) %>
<%- include('../partials/_header.ejs',{title: paramValue}) %>
<%- include('../partials/_navbar.ejs',{title: paramValue}) %>
<%- include('../partials/_footer.ejs',{title: paramValue}) %>


##
<%- include('../partials/youFileName.ejs') %>. 
<%- include('../partials/footer') %>
