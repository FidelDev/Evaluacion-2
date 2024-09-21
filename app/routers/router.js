
let express = require('express');
let router = express.Router();
 
const usuario = require('../controllers/Usuarios.controller.js');
//controllers.js
router.post('/api/usuario/create', usuario.create);
router.get('/api/usuario/all', usuario.retrieveAllUsuario);
router.get('/api/usuario/onebyid/:UserId', usuario.getUserById);
router.put('/api/usuario/update/:UserId', usuario.updateById);
router.delete('/api/usuario/delete/:userId', usuario.deleteById);


module.exports = router;

/*

{
  "codeLibro": 1,
  "codUsuario": 1,
  "fechaSalida": "2024-01-01",
  "fechaMXdevolver": "2024-01-02",
  "fechaDevolucion": "2024-01-03",
}
**/