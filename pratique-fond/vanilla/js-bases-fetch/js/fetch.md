/_ Méthode 1 _/
fetch(resource)
fetch(resource, options)

ressource = url, blob, object, .json, .text, data
options =
method;
headers;
body(Blob,BufferSource,FormData, URLSearchParams, ou USVString.);
mode(cors, no-cors, ou same-origin.);
credentials(omit, same-origin, include);
cache(default, no-store, reload, reload, no-cache, force-cache, only-if-cached);
redirect(follow, error, manual);
referrer(no-referrer, client);
referrerPolicy(no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url);
integrity; (cat FILENAME.js | openssl dgst -sha384 -binary | openssl enc -base64 -A
)
keepalive;
signal;
priority(high, low, auto);

fetch("https://victim.example/naïve-endpoint", {
method: "POST",
headers: [
["Content-Type", "application/json"],
["Content-Type", "text/plain"]
],
credentials: "include",
body: JSON.stringify(exerciseForTheReader)
});

/_ ------------------------------------ _/
/_ Fetch dans une fonction _/
const userData = async() => {
let requestString = "URL";

let resp = await fetch(requestString);
let data = await resp.json();

// ...
}

/_ ----------------------------------- _/
/_ Méthode 2 BLOB _/

fetch(request)
.then((response) => response.blob())
.then((blob) => {
image.src = URL.createObjectURL(blob);
});

/_ ----------------------------------- _/
/_ Méthode 3 _/

fetch(request)
.then((response) => {
if (response.status === 200) {
return response.json();
} else {
throw new Error("Something went wrong on api server!");
}
})
.then((response) => {
console.debug(response);
// ...
})
.catch((error) => {
console.error(error);
});

/_ ----------------------------------- _/
/_ Méthode 4 _/

// const fetchResponsePromise = Promise<Response> fetch(entrée[, init]);
"entrée" :URL, blob, data, un objet

"method" : POST, GET, PATCH
/_ ----------------------------------- _/
/_ Méthode 5 _/
async function(){
try{
const response = await fetch(URL);
const data = await response.json();
}
catch(error){
console.log(error);
}
}

/_ ----------------------------------- _/
/_ Méthode 6 _/

let XMLRequest = new Promise();

XMLRequest.open("GET","https://restcountries.com/v3.1/all");

XMLRequest.send();

XMLRequest.onload = () => {
if(XMLRequest.status === 200){
const data = JSON.parse(XMLRequest.response)
console.log("Request successful");
}else{
console.log("Error occurs");
}
console.log(data);
}

/_ ----------------------------------- _/
/_ Méthode 7 _/

/_ ----------------------------------- _/
/_ Méthode 8 _/
/_ ----------------------------------- _/

headers :
headers . append(name, value)

    Appends a header to headers.

headers . delete(name)

    Removes a header from headers.

headers . get(name)

    Returns as a string the values of all headers whose name is name, separated by a comma and a space.

headers . getSetCookie()

    Returns a list of the values for all headers whose name is `Set-Cookie`.

headers . has(name)

    Returns whether there is a header whose name is name.

headers . set(name, value)

    Replaces the value of the first header whose name is name with value and removes any remaining headers whose name is name.

for(const [name, value] of headers)

    headers can be iterated over.
