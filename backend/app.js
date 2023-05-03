const express = require("express");
const mongoose = require("mongoose");
const stuffRoutes = require("./routes/stuff");

// Création de l'application express
const app = express();

// Connexion à la base de données MongoDB
mongoose
  .connect(
    "mongodb+srv://Fysalidev:5PvstF1R0zDpjZjz@mern-app.b3xu0y1.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Met à disposition content-type: application/json et met à disposition dans requ.body (Donne accès au corps de la requête)
app.use(express.json());

// Middleware qui permet de transformer le corps de la requête en objet JS utilisable
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", stuffRoutes);

module.exports = app;
