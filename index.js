//IMPORT
const express = require("express");
const { set } = require("express/lib/application");
const { get } = require("express/lib/response");
const path = require("path");
const app = express();
const routes = require('./src/routes/routes');



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);

