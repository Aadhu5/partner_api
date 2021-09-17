const express = require("express");
var cors = require('cors');
const apiRoutes = require("./routes/api_action");

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/", apiRoutes);
app.use("/api/checkExist", apiRoutes);
app.use("/api/insert_from", apiRoutes);
app.use("/api/new_request", apiRoutes);
app.use("/api/req_details", apiRoutes);
app.use("/api/req_accept", apiRoutes);
app.use("/api/req_ignore", apiRoutes);
app.use("/api/accept_request", apiRoutes);

app.listen(3000);