const { Sequelize } = require('sequelize');


const sequelize = new Sequelize( 
    'graficos',
    'root',
    'admin123',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => {console.log('Conexion exitosa')})
    .catch((error) => {console.log('Error de conexion', error)})

module.exports = sequelize;