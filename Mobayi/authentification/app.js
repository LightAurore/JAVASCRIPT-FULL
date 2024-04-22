
const express = require('express');
const app = express();


// 
app.use(express.static('public')) // relative path of client-side code
app.use(express.static(__dirname + '/public'));

// 

app.get('/', (req, res) => {
    res.sendFile('/index', {root: 'public'});
})
app.get('/admin',  (req, res) => {
    console.log('admin');
    res.sendStatus(501);
})

var sessionChecker = (req,res,next) => {
    if(req.session.isLogged){
        next();
    }else{
        res.redirect('/login');
    }
}

app.get('/login', function(req, res) {
    console.log('get');
    const formData = new FormData();
    console.log(formData);
    formData = {
        username: username,
        password: password
    };
    console.log(formData.username, formData.password);
    res.sendFile('login.html', {root: 'public'});
})

app.post('/login', (req, res) => {

    // console.log(username, password);
    // const form = new FormData();

    // const loginDetails = {
    //     username: form.username,
    //     password: form.password
    // };
    // console.log('post');
    // console.log(loginDetails)

    res.redirect('/');
})





app.listen(8521, ()=>{
    console.log("App running on a port http://localhost:8521");
})