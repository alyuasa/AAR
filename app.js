const express = require("express");
const app = express();

app.get("/aar", (req, res, next) => {
    return res.status(200).sendFile("senna.html", {root: './'});
});

app.get("/aar", (req, res, next) => {
    return res.status(200).sendFile("verstappen.html", {root: './'});
});

app.get("/aar", (req, res, next) => {
    return res.status(200).sendFile("hamilton.html", {root: './'});
});