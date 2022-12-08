import express from "express"
import mysql from "mysql"
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcrypt";

const saltRounds = 10;

const app = express();

import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "sunny",
  host: "localhost",
  password: "Omsairam@123",
  database: "LoginSystem",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});



const db = mysql.createConnection({
    host:"localhost",
    user:"sunny",
    password:"Omsairam@123",
    database:"test"
}); 

app.get("/", (req,res)=>{
    res.json("hello this is backend")
});

app.use(express.json())
app.use(cors())

app.get("/books",(req,res)=>{
    const q="select * from books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q="insert into books (`title`,`desc`,`cover`) Values(?)"
    //const values=["title from backend","desc from backend","cover pic"];
    const values=[
        req.body.title,
        req.body.desc,
        req.body.cover
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Books have been inserted ")
    })
})

app.put("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="update books set title=?, desc=?, price=?, cover=? where id=?"
    const values=[
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ];
    db.query(q,[...values,bookId] ,(err,data)=>{
        if(err) return res.json(err)
        return res.json("Updated")
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="delete from books where id=?"
    db.query(q,bookId,(err,data)=>{
        if(err) return res.json(err)
        return res.json("delete")
    })
})

app.listen(8800, () => {
  console.log("running server");
});
