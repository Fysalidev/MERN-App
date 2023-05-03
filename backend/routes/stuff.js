const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuffControllers");

//Créer un objet (CREATE)
router.post("/", stuffCtrl.createThing);

// Récupération de tous les objets (READ)
router.get("/", stuffCtrl.findThings);

// Récupération d'un objet (READ)
router.get("/:id", stuffCtrl.findOneThing);

// Modifier d'un objet (UPDATE)
router.put("/:id", stuffCtrl.modifyThing);

// Suppression d'un objet (DELETE)
router.delete("/:id", stuffCtrl.deleteThing);

module.exports = router;
