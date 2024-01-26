// https://www.youtube.com/watch?v=f3Q6D28L0ls

const express = require("express");
const app = express();
const Pool = require("pg").Pool;
const path = require("path");
const ejs = require("ejs");
const PORT = 3000;

require("dotenv").config();

// const pool = new Pool({
//   user: process.env.USER_NAME,
//   host: process.env.HOST_DB,
//   database: process.env.NAME_DB,
//   password: process.env.USER_PWD,
//   port: process.env.PORT_DB,
// });
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todoList",
  password: "b17=x/",
  port: "5432",
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error in connection");
  }
  client.query(`SELECT NOW()`, (err, result) => {
    release();
    if (err) {
      console.log(err);
      return console.error("Error executing query");
    }
    console.log("Connected to database");
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// read
app.get("/", async (req, res) => {
  const data = await pool.query(`SELECT * FROM todo ORDER BY date`);
  console.log(data);
  res.render("index", { data: data.rows });
});
// filter
app.post("/filter", async (req, res) => {
  const searchDate = req.body.date;
  const data = await pool.query(
    `SELECT * FROM todo WHERE date='${searchDate}'`
  );
  console.log(data);
  res.render("filter", { data: data.rows });
});

// add toto andpoint
app.post("/addTodo", async (req, res) => {
  const { todo, date } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO todo(todo, date) VALUES($1, $2) RETURNING *`,
      [todo, date]
    );
    console.log("Mon resultat : " + result);
    res.redirect("/");
  } catch (error) {
    console.log("Error in adding todo");
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update
app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const data = await pool.query(`SELECT * FROM todo WHERE id = $1`, [id]);
  res.render("edit", { data: data.rows });
});

app.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { todo, date } = req.body;

  try {
    await pool.query(`UPDATE todo SET todo = $1, date = $2 WHERE id = $3`, [
      todo,
      date,
      id,
    ]);
    res.redirect("/");
  } catch (error) {
    console.log("Error update todo : ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete
app.post("/delete/:id", async (req, res) => {
  console.log(req);
  const id = req.params.id;
  console.log(id);
  try {
    await pool.query(`DELETE FROM todo WHERE id = $1`, [id]);
    res.redirect("/");
  } catch (error) {
    console.log("Error update todo : ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  // console.log(req);
  // const id = req.params.id;
  // console.log(id);
  // await pool.query(`DELETE FROM todo WHERE id = $1`, [id]);
  // res.redirect("/");
});

app.listen(PORT, () => console.log(` Server started at porthttp://localhost:${PORT}`));
