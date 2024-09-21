
module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define('usuarios', {	
	  id_usuario: {
			type: Sequelize.INTEGER,
			primaryKey: true,
    },
	  nombre: {
			type: Sequelize.STRING
	  },
	  apellido: {
			type: Sequelize.STRING
  	},
	  email: {
			type: Sequelize.STRING
	  },
    telefono: {
        type: Sequelize.INTEGER
      },
    direccion: {
        type: Sequelize.STRING
      },
    fecha_Registro: {
        type: Sequelize.DATEONLY,
      },
    estado: {
        type: Sequelize.STRING,
      }
	});
	
	return Usuarios;
}

/*
id_usuario
nombre
apellido
email
telefono
direccion
echa_Registro
estado
*/

