const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const stuffCtrl = require("../controllers/stuffController");

//Créer un objet (CREATE)
router.post("/", auth, stuffCtrl.createThing);

// Récupération de tous les objets (READ)
router.get("/", auth, stuffCtrl.findThings);

// Récupération d'un objet (READ)
router.get("/:id", auth, stuffCtrl.findOneThing);

// Modifier d'un objet (UPDATE)
router.put("/:id", auth, stuffCtrl.modifyThing);

// Suppression d'un objet (DELETE)
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
