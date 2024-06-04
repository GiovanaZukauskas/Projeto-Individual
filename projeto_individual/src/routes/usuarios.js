var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.post("/cadastrar_voto", function (req, res) {
    usuarioController.cadastrar_voto(req, res);
})
router.get("/puxar_voto", function (req, res) {
    usuarioController.puxar_voto(req, res);
});



module.exports = router;