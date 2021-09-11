const express = require("express");
var cors = require('cors');
const mysqlconn = require("./connection");
const apiRoutes = require("./routes/api");

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/", apiRoutes);
app.use("/checkExist", apiRoutes);
app.use("/insert_from", apiRoutes);
app.use("/new_request", apiRoutes);
app.use("/req_details", apiRoutes);
app.use("/req_accept", apiRoutes);
app.use("/req_ignore", apiRoutes);
app.use("/accept_request", apiRoutes);
app.use("/delay_me", apiRoutes);

app.listen(3020);