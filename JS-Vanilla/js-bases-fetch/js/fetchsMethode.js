var monHeader = new Headers();

console.log(monHeader);

// headers . append(name, value)
monHeader.append("Content-Type", "text/xml");
monHeader.append("Content-Type", "image/jpeg");
monHeader.append("Content-Type", "application/xhtml+xml");
monHeader.append("Content-Type", "application/xml");

// headers . delete(name)
monHeader.delete("Content-Type", "text/xml");
console.log(monHeader.append("Content-Type", "text/xml"));

// headers . get(name)
monHeader.get("Content-Type"); // doit retourner 'text/xml'
console.log(monHeader.get("Content-Type"));

// set(name, value)
monHeader.set("Content-Type", "text/html");
monHeader.set("Accept-Encoding", "deflate");
monHeader.set("Accept-Encoding", "gzip");
console.log(monHeader.get("Accept-Encoding"));
// Returns 'gzip'

// has(name)
console.log(monHeader.has("Accept-Encoding"));

//
console.log(monHeader.keys());
monHeader.append("Vary", "Accept-Language");
// Display the keys
for (const key of monHeader.keys()) {
  console.log(key);
}

monHeader.values();
// Display the values
for (const value of monHeader.values()) {
  console.log(value);
}

monHeader.entries();
// Display the values
for (const pair of monHeader.entries()) {
  console.log(`${pair[0]} : ${pair[1]}`);
}

// headers . getSetCookie()
monHeader.append(
  "Set-Cookie",
  "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"
);
console.log(monHeader.getSetCookie());

// for(const [name, value] of headers)
for (const [name, value] of monHeader) {
  console.log(name, value);
}

/* https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types */
var mesHeaders = new Headers({
  Accept: ["q=0.9", "*/*", "q=0.8"],
  "Accept-Charset": "",
  "Accept-Encoding": "",
  "Access-Control-Request-Headers": ["X-PINGOTHER", "Content-Type"],
  "Access-Control-Request-Method": "POST",
  "Accept-Language": "",
  "Content-Language": "fr",
  "Content-Length": "",
  "Content-Encoding": "",
  "Content-Location": "",
  "Content-Type": [
    "text/xml",
    "text/plain",
    "multipart/form-data",
    "application/x-www-form-urlencoded",
    "charset=utf-8",
    "boundary=something",
  ],
  "Cache-Control": "",
  "Content-Length": "",
  "Last-Modified": "",
  Pragma: "",
  Expires: "",
  Connection: "",
  Cookie: "",
  Cookie2: "",
  Date: "",
  DTN: "",
  Expect: "",
  Host: "",
  "Keep-Alive": "",
  Origin: "",
  Referer: "",
  "Set-Cookie": "",
  TE: "",
  Trailer: "",
  "Transfert-Encoding": "",
  Upgrade: "",
  via: "",
  "user-Agent": "",
});
console.log(mesHeaders);
