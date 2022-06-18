const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/routes");

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
