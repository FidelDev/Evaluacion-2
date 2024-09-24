const db = require('../config/db.config.js');

const Usuarios = db.Usuarios;

//CREATE
exports.create = (req, res) => {
    let usuario = {};

    try{
        usuario.id_usuario = req.body.id_usuario,
        usuario.nombre = req.body.nombre,
        usuario.apellido = req.body.apellido,
        usuario.email = req.body.email,
        usuario.telefono  = req.body.telefono,
        usuario.direccion = req.body.direccion,
        usuario.fecha_Registro = req.body.fecha_Registro,
        usuario.estado = req.body.estado
    
        // Save to MySQL database
        Usuarios.create(usuario).then(result => {    
            // 
            res.status(200).json({
                message: "Save user id = " + result.id_usuario,
                usuario: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

//READ
exports.retrieveAllUsuario = (req, res) => {
    // find all User information from 
    Usuarios.findAll()
        .then(UsuarioInfos => {
            res.status(200).json({
                message: "Get all User Infos Successfully!",
                usuarios: UsuarioInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

//READ THE USER BY ID --validando
exports.getUserById = (req, res) => {
    // find all User information from 
    let UserId = req.params.id_usuario;//id_usuario

    Usuarios.findByPk(UserId)
        .then(user => {
            res.status(200).json({
                message: " Successfully Get a User with id = " + UserId,
                user: user
            });
        })
        . catch(error => {
          // log on console
          console.log(error);
          
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
  }

//UPDATE
exports.updateById = async (req, res) => {
    try{
        let UserId = req.params.id_usuario;
        let Usuario = await Usuarios.findByPk(UserId);
    
        if(!Usuario){
            // return a response to USer
            res.status(404).json({
                message: "Not Found for updating a User with id = " + UserId,
                usuario: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                id_usuario: req.body.id_usuario,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                fecha_Registro: req.body.fecha_Registro,
                estado: req.body.estado
            }
            let result = await Usuarios.update(updatedObject, {returning: true, where: {id_usuario: UserId}});
            
            // return
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a User with id = " + req.params.id_usuario,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a book with id = " + UserId,
                usuario: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a User with id = " + req.params.id_usuario,
            error: error.message
        });
    }
}

//DELETE
exports.deleteById = async (req, res) => {
    try{
        let userId = req.params.id_usuario;
        let usuario = await Usuarios.findByPk(userId);

        if(!usuario){
            res.status(404).json({
                message: "Does Not exist a User with id = " + userId,
                error: "404",
            });
        } else {
            await usuario.destroy();
            res.status(200).json({
                message: "Delete Successfully a User with id = " + userId,
                usuario: usuario,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a User with id = " + req.params.id_usuario,
            error: error.message,
        });
    }
}