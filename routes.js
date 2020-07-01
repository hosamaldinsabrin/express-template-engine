const express = require("express");
const router = express.Router();

router.use(function(req, res, next) {
  console.log("calling: ", req.url);
  next();
});

router
  .route("/")
  .get((req, res) => {
    // Hier sollen alle datenbank daten zurück gegeben werden.
  })

router
  .route("/music")
  .get((req, res) => {
    // Hier sollen alle Musik Alben zurück gegegeben werden
  })
  .post((req, res) => {
    // Hier soll ein neues Album mit einer neuen, einzigartigen uuid eingefügt werden.
  });

  router
  .route("/films")
  .get((req, res) => {
    // Hier sollen alle Filme zurück gegegeben werden
  })
  .post((req, res) => {
    // Hier soll ein neuer Film mit einer neuen, einzigartigen uuid eingefügt werden.
  });

router
  .route("/music/:id")
  .get((req, res) => {
    // Hier soll ein einziges Album anhand einer ID zurückgegeben werden.
  })

  router
  .route("/film/:id")
  .get((req, res) => {
    // Hier soll ein einziger FIlm anhand einer ID zurückgegeben werden.
  })


module.exports = router;