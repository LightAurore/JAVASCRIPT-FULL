'use strict'

const express = require('express')
const app = express()
const port = 3030


app.use(express.static("public")); // relative path of client-side code
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})