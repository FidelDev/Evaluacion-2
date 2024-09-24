
let express = require('express');
let router = express.Router();
 
const usuario = require('../controllers/Usuarios.controller.js');
//controllers.js
router.post('/api/usuario/create', usuario.create);
router.get('/api/usuario/all', usuario.retrieveAllUsuario);
router.get('/api/usuario/onebyid/:id_usuario', usuario.getUserById);//
router.put('/api/usuario/update/:id_usuario', usuario.updateById);//
router.delete('/api/usuario/delete/:id_usuario', usuario.deleteById);//


module.exports = router;