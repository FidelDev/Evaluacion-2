
let express = require('express');
let router = express.Router();
 
const usuario = require('../controllers/Usuarios.controller.js');
//controllers.js
router.post('/api/usuario/create', usuario.create);
router.get('/api/usuario/all', usuario.retrieveAllUsuario);
router.get('/api/usuario/onebyid/:UserId', usuario.getUserById);//
router.put('/api/usuario/update/:UserId', usuario.updateById);//
router.delete('/api/usuario/delete/:userId', usuario.deleteById);//


module.exports = router;