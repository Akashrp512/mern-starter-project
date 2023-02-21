const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

//Initialize Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes/productRoutes"));
app.listen(port, () => console.log(`Server started on ${port} `));
