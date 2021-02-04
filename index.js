//main entry point file

//CREATING A SIMPLE EXPRESS SERVER

const express = require("express");
//bringing in the path module is to load static files into the server
const path = require("path");
const exphbs = require("express-handlebars");

const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

//init Middleware
// app.use(logger);

//handlebars Middleware, FOR TEMPLATING
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ===================== START OF BODY PARSER MIDDLEWARE =========================

//a body parser is to parse information (JSON) sent through the body of html
//express.json allows us to handle RAW JSON
app.use(express.json());
//express.urlencoded = handle form submissions/THIS WAY WE CAN ALSO HANDLE URL ENCODED DATA
app.use(express.urlencoded({ extended: false }));

// ===================== END OF BODY PARSER MIDDLEWARE =========================

//BELOW IS TEMPLATING, FOR NON REACT, Homepage route (templating)  **either this or static folder
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  });
});

//app.use = MIDDLEWARE, EXPRESS.STATIC makes it a static folder on the server, which is TEMPLATING
app.use(express.static(path.join(__dirname, "public")));

//Members API routes
app.use("/api/members", require("./routes/api/members"));

//PORT is normally created in a separate config file
//when we deploy, the server is most likely not going to run on 5000, but on process.env.PORT, so we check the process.env.PORT first
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
