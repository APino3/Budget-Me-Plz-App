const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const routes = require("./Controllers/index");
const helpers = require("./utilities/helpers");
const sequelize = require("./config/connection");
const { clear } = require("console");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  defaultLayout: "Layouts/main",
  layoutsDir: __dirname + "/Views/",
  ...helpers,
});

const sess = {
  secret: "super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js which template engine we're using
app.engine("handlebars", hbs.engine);
// app.engine(
//   "handlebars",
//   hbs.engine({
//     layoutsDir: __dirname + "/views",
//   })
// );
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);
app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening" + PORT));
});
